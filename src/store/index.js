import { combineReducers, legacy_createStore } from "redux";
import serviceReducer from "./reducers/serviceReducer";
import listReducer from "./reducers/listReducer";

function store(){
   return legacy_createStore(
    combineReducers({
        service: serviceReducer,
        list: listReducer   
    })
    )
}

export default store;