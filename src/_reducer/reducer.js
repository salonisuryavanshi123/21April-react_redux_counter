import { ADDBYONE, RESET, SUBTRACTBYONE } from "../_constants";

export const rootReducer = (oldState,action)=>{
    let newState = oldState
  
    switch(action.type){
      case ADDBYONE:
        return {
          ...newState,
          value: newState.value + action.payload
        }

      case SUBTRACTBYONE:
        return {
          ...newState,
          value: newState.value - action.payload
        }
        
      case RESET:
        return {
          ...newState,
          value: action.payload
        }
        
      default:
        return newState;
    }
    
  }

