import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increament, decreament, clear,random } from './slices/counterSlice';
import { getUserData } from './slices/counterSlice';
const App = () => {
  const dispatch = useDispatch()
  const countState = useSelector(state => state?.count)
  const countNum = useSelector(state => state?.count?.number)
  console.log("gg",countState)


  useEffect(() => {
    dispatch(random(Math.ceil(Math.random() * 10)))
  },[])

  useEffect(() => {
    if(countNum >= 0) {
      dispatch(getUserData(countNum))
    }
  },[countNum])


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
      <h1>{countState.count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={() => want(10)}>clear</button>
    </div>
  );
};

export default App;