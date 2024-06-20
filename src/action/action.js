// Example reducer  object
const initialState = {
  value: 0
};


const action  = (state = initialState, action) => { 
    switch (action.type) {
    // export const INCREMENT = 'INCREMENT'
      case 'INCREMENT':
        return {
          ...state,                                                   //3 dotes replaces the current state with updated state
          value: state.value + 1                                    //modifies current state
        };
      case 'DECREMENT':
        return {
          ...state,
          value: state.value - 1
        };
       }
      
    }

    export default action;// Export the reducer function
  

    export const INCREMENT = 'INCREMENT'; // Export INCREMENT as a named export
    export const DECREMENT = 'DECREMENT'; // Export DECREMENT as a named export   