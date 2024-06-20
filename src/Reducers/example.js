// Example reducer  object
const initialState = {
  value: 0
};

const example = (state = initialState, action) => { 
  switch (action.type) {
    case 'INCREMENT':return state + 1;                                                 //3 dotes replaces the current state with updated state
    case 'DECREMENT':return state - 1;
  }
   }

 export default example;


