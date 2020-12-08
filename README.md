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
