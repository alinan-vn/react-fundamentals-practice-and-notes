https://reactjs.org/docs/hooks-intro.html
#		
# INTRODUCING HOOKS

- Hooks are 100% backwards-compatible
- Hooks are available with the release of v16.8.0
- Hooks allow you to reuse stateful logic without changing your componeny hierarchy
- Hooks let you use more of React's features without classes
#
# HOOKS AT A GLANCE

### What is a Hook?
- A Hook is a special function that lets you 'hook into' React features. For example, `useState` is a Hook that lets you add React state to function components. Use Hooks when you write a function component and realize you need to add some state to it (previously you had to convert it to a class).
- You can use Hooks inside function components

### Hook - useState

```
import React, { useState } from 'react';
 
// functional component version
const [count, setCount] = useState(0); // declares a state variable called 'count'

setCount(count + 1); // increments count by 1


// class component version
constructor(){
	super()
	this.state = {
		count: 0
	}
}

this.setState({ count: this.state.count + 1 })
```

- React assumes that if you call `useState` many times, you do it in the same order during every render.

### Hook - useEffect
```
import React, { useState, useEffect } from 'react';

function Example() {
	const [countt, setCount ] = userState(0);

    // similar to componentDidMount and componentDidUpdate
	useEffect(() => {
		// update the documents title using the browser API
 		document.title = `You clicked ${count} times`;
	});

	return(
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}
```
- `useEffect` add the ability to preform side effects from a function component. It serves the same purpose as `componentDidMount`, `componentDidUpdate`,  and `componentWillUnmount` in React classes, but unified into a single API.
- When you call `useEffect`, you're telling React to run you 'effect' function after flushing changes to the DOM. Effects are declared inside the component so they have access to it props and state. (By default, React runs the effects after every render - including the first render)
- you can use `useEffect` multiple times in a component.
- Hooks let you organize side effects in a component by what pieces are related (such as adding and removing a subscription), rather than forcing a split  based on lifecycle methods.

### Rules of Hooks
- Hooks are JavaScript functions but impose two additional rules:
	1. Only call Hooks at the top level. Don't call Hooks inside loops, conditions, or nested functions.
	2. Only call Hooks from React function components. Don't call Hooks from regular JavaScript functions. (There is just one other valid place to call 
		Hooks --> your own custome Hooks)

#
# USING THE STATE HOOK

### Hooks and Function Components

```
// example of a function component
const Example = (props) => {
	// You can use Hooks here
	return <div />;
}
// or like this
function Example(props) {
	// You can use Hooks here
	return <div />;
}
```

- `useState` is a new way to use the exact same capabilities that `this.state` provides in a class. Normally, variables 'disappear' when the function exits but state variables are preserved by React.
- `useState` returns a pair of values: the current state and a function that updates it.
- when we declare a state variable with `useState`, it returns a pair -an array with two items. The first item is the current value, and the second is a  function that lets us update it.

#
# USING THE EFFECT HOOK

```
import React, { useState, useEffect } from 'react';

function Example () {
	const [count, setCount] = useState(0);

	// Similar to componentDidMount and componentDidUpdate
	useEffect(() => {
		// Update the document title using the browser API
		document.title = `You clicked ${count} times`;
	});

	return(
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</div>
	);
}
```

- Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
- You can think of `useEffect` Hook as `componentDidMount`, `componetDidUpdate`, and `componentWillUnmount` combined
- What does useEffect do? By Using this Hook, you tell React that your component needs to do something after render.
- Why is useEffect called inside a component? Placing `useEffect` inside the component lets us access the `count` state variable  (or any props) right from the effect.
- By default `useEffect` runs both after the first render and after every update.

#
# RULES OF HOOKS

- Only call Hooks at the top level -> Don't call Hooks inside loops, conditions, or nested functions. By following this rule, you  ensure that Hooks are called in thesame order each time a component renders.
- Only call Hooks from React functions -> Don't call Hooks from regular JavaScript functions. Instead: Call Hooks from React function components, Cal Hooks from custome Hooks. By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.
- You can use multiple State or Effect Hooks in a single component. Reach knows which state corresponds to which `useState` call because React relies on the order in which Hooks are called.
- If you want to run an effect conditionally, put that condition inside our Hook.











