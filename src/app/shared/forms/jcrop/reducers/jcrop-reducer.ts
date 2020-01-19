
// import {Action} from "redux"
const clone = require('clone');

// import {combineReducers} from 'redux'
import {defaultCropState} from './crop-reducer'
import {defaultOptionsState} from './options-reducer'


export const configJcropInitialState = (storeId)=>{
   return {
    options: defaultOptionsState(storeId),
    crop: defaultCropState(storeId)
  }
};

// export const jcropReducer
// = combineReducers({
    // crop: cropReducer,
    // options: optionsReducer
// });


