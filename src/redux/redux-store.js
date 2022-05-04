import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let reducers = combineReducers({
    profilePage: profileReducer, //profileReducer: profileReducer, - the same
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer
});

const store = createStore(reducers);

export default store;