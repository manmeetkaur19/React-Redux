import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement} from './action/action';

export default function App() {
 const dispatch = useDispatch();                                                 // Get the dispatch function
 const value = useSelector((state) = state.change) ;                       //access state using useselector

  
  return (
    <div>
      <h1>value:{value}</h1>
      <button onClick={()=> dispatch (increment())}>Increment</button>                              {/* it dispatches  action frpm component and gaves to reducers */}
      <button onClick={()=> dispatch (decrement())}>Decrement</button>
    </div>
    
  )
}
