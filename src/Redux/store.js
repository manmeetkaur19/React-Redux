//create redux store

import { createStore } from 'redux';
import rootReducer from '../Reducers';


const store = createStore(rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);


export default store;

