
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";


export const ADD_TODO = (title) =>{
    return {type: ADD_TODO, payload : {title, status : false}}
}
export const REMOVE_TODO = (title) =>{
    return {type: REMOVE_TODO, payload : title}
}
export const TOGGLE_TODO = (title) =>{
    return {type: TOGGLE_TODO, payload : title}
}

