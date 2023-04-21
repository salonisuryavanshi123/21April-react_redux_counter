import { ADDBYONE, RESET, SUBTRACTBYONE } from "../_constants"


export const AddByOne = ()=>{
    return { type:ADDBYONE,payload:1 }
}

export const SubtractByOne = ()=>{
    return { type:SUBTRACTBYONE,payload:1 }
}

export const Reset = ()=>{
    return { type:RESET,payload:0 }
}