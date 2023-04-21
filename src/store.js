import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './_reducer/reducer';

//Lets create storeGlobalObject

   export const storeObject = createStore(rootReducer
    ,{ value: 99 })