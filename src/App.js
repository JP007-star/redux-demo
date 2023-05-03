import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, login } from './action';

function App() {
  const counter=useSelector(state=>state.counter)
  const isLoggedIn=useSelector(state=>state.isLoggedIn)
  const dispatch=useDispatch()
  return (
     <>
       <h1>Counter : {counter}</h1>
       <button onClick={()=>dispatch(increment())}>+</button>
       <button onClick={()=>dispatch(decrement())}>-</button>
       <button onClick={()=>dispatch(login())}>sign in</button>
       {isLoggedIn ? <p>Welcome </p> : <p> please signIn</p>}
     </>
  );
}

export default App;
