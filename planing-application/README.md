#### Lynda.com by Alex Banks

<br/>
## Flux
```
- Flux is a design pattern developed at Facebook to provide an alternative to MVC or MVP or MVVM.
- In Flux, the data flows in one direction.
- Changes are initiated with actions.
- Actions are objects that describe what should change about the data.
- Actions are dispatched with the dispatcher. The dispatcher is an object that sends the action to the appropriate store.
- The store holds the data. It's like a model, but they're not exactly the same.
- The store is responsible for updating or changing its data.
- Finally, when the store updates the data, that change updates the view.

- Now, if the user interacts with the view, a new action is generated and the process starts all over again. Data flows in one direction.
- As a Flux application grows, it may include more stores and more views, but the dataflow remains unidirectional.
- All changes in a Flux application begin by dispatching actions and end with updating views.
- Flux itself is not a library, it's a design pattern that can be implemented with Javascript.

```
![alt text](flux.png?raw=true "flux image")

##
## REDUX
```

- Redux is a JavaScript library that you can use to manage client data within an application.
- Redux is based on Flux, a design pattern that provides developers with an alternative to MVC.
- It was designed to tackle the challenge of understanding how data changes flow through an application.
- Using Redux, you can incorporate simplified approaches to data management within your client application that should make it easier to understand, easier to wrap your head around, and ultimately, easier to debug.

- Redux does not require that you use React but it is designed to work with React.
- Redux isn't exactly Flux, it's Flux-like
- Flux data flows in one direction. An action is sent to the dispatcher, and then dispatched to one or more stores before the view is updated.
- Redux data still flows in one direction, but there's a big difference.
- There's only one store.
- With Redux you cannot use multiple stores, and because there is only one store, there's no need for a dispatcher.
- The store will dispatch the actions directly.
- Having one stores means that ALL of your state will be located in one place.
- We refer to this as the single source of truth.
- With Redux, modularity is obtained through functions.

```
![alt text](redux.png?raw=true "redux image")
```
