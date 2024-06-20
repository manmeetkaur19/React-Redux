import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {INCREMENT,DECREMENT} from './action/action.js';

export default function App() {
 const dispatch = useDispatch();                                                 // Get the dispatch function
 const value = useSelector((state) = state.example.value) ;                       //access state using useselector

  
  return (
    <div>
      <h1>value:{value}</h1>
      <button onClick={()=> dispatch (INCREMENT())}>Increment</button>                              {/* it dispatches  action frpm component and gaves to reducers */}
      <button onClick={()=> dispatch (DECREMENT())}>Decrement</button>
    </div>
    
  )
}
