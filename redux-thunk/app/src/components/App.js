import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import {fetchUsers} from '../actions/index'

 class App extends Component {
  componentWillMount() {
      this.props.fetchUsers();
  }

  renderUser({id, name, email}) {
      return (
          <li className="list-group-item" key={id}>
              <p>User: {name}</p>
              <span className="label label-default label-pill">
                  <a href={email}>{email}</a>
              </span>
          </li>
      )
  }
  render() {
    return (
      <div className="App">
        <h4>Email Directory</h4>
        <ul className="list-group">
            {this.props.getUsers.map(this.renderUser)}
        </ul>
      </div>
    );
  }
}
//bring in app level state
function mapStateToProps (state) {
    return {getUsers: state.getUsers}
}
//wiring react/redux together
export default connect(mapStateToProps, {fetchUsers})(App);

