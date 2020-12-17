This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Hooks

A Hook is a special function that lets you “hook into” React features.
eg: `useState` is a Hook that lets you add React state to function components.

### useState

useState is a function and it takes initialState as an argument.

```JS
usestate(initialState)
```

useState returns an array.
First item of the array is the state & second item is a function to update the state.

```JS
const [state, setState] = usestate(initialState);
```

---

### useEffect

It allows us to produce side effects in our component.
Side Effects: Anything that reaches outside of the component to do anything.
eg

> API requests to our backend service.
> Calls to our authentication service.
> Error tracking calls to Sentry. etc

`useEffect` takes in 2 parameters.

- first, A callback funtion to write our logic
- second, An array. we put in the variables to be watched for change, and when the variable changes `useEffect` will run again.

By default, effects run after every completed render, but you can choose to fire them only when certain values have changed. To implement this, pass a second argument to useEffect that is the array of values that the effect depends on.

If we put an empty array, the effect will not run again. Until we refresh the app. Aka `componentDidMount()`.

For cleal-up work in useEffect, We return a function in the function we pass in the useEffect, to do all the clean up work. In class component we used `componentWillUnmount()`
