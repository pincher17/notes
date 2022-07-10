import { combineReducers, createStore } from "redux";
import NotesReducer from "./notes-reducer";



const reducers = combineReducers({
    notesData: NotesReducer,

})

let store = createStore(reducers);
console.log(store.getState())
export default store;