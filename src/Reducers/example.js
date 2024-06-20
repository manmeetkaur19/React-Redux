// Example reducer  object
const initialState =0;

const change = (state = initialState, action) => { 
  switch (action.type) {
    case 'INCREMENT':return state + 1;                                                 //3 dotes replaces the current state with updated state
    case 'DECREMENT':return state - 1;
    default : return state;
  }
   }

 export default change ;


