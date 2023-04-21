import { ADDBYONE, RESET, SUBTRACTBYONE } from "../_constants";

export const rootReducer = (oldState,action)=>{
    let newState = oldState
  
    switch(action.type){
      case ADDBYONE:
        return {
          ...newState,
          value: newState.value + action.payload
        }
        break;
      case SUBTRACTBYONE:
        return {
          ...newState,
          value: newState.value - action.payload
        }
        break;
      case RESET:
        return {
          ...newState,
          value: action.payload
        }
        break;
      default:
        return newState;
    }
    
  }

