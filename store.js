import { createStore } from "redux";
import { reducer } from "./reducer.js";

const initState = { todo: [] };
const store = createStore(reducer, initState);

export default store;