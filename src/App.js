import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increament, decreament, clear } from './slices/counterSlice';

const App = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.count)

  console.log(state)

  const plus = () => {
    dispatch(increament())
  }
  const minus = () => {
    dispatch(decreament())
  }

  const want = (num) => {
    dispatch(clear(num))
  }
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={() => want(10)}>clear</button>
    </div>
  );
};

export default App;