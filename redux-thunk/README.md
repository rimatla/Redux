##### By Stephen Grider
# Redux Thunk
##### - The vast amount of data manipulation in our apps happens through asynchronous channels.

![alt text](reduxFlow.png?raw=true "app2 image")

#####  - Vanilla Redux isn't set up to handle asynchronous out of the box.

#####  - The propose of Redux Thunk is to give us direct control over the dispatch method.
Dispatch is a method inside redux store that contains the app state.

#####  - You use dispatch under the hood on any vanilla redux app:
Dispatch filters/funnel the actions and the remainder operations ie:

![alt text](dispatch.png?raw=true "app2 image")