https://www.w3schools.com/react/react_lifecycle.asp
		
#
# LIFECYCLES OF COMPONENTS

- Each componet in React has a lifecycle which you can monitor and manipulate during its three main phases: Mounting, Updating, and Unmounting

#
# MOUNTING

- Mounting means putting elements into the DOM
- React has four built-in methods that gets called, in this order, when mounting a component: `constructor()`, `getDerivedStateFromProps()`,
`render()`, and `componentDidMount()`
- the render() method is required and will always be called.

#
# CONSTRUCTOR

- the `constructor()` method is called before anything else, when the component is initiated, and it is the natural place to set up the initial `state` and other initial values.
- the `constructor()` method is called with the `props`, as arguments, and you should always start by calling the `super(props)` before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (`React.Component`)

#
# GETDERIVEDSTATEFROMPROPS
		
















