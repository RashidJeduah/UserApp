import userReducer from './UserReducer';
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";

export default combineReducers ({
    usersState: userReducer,
    firebase: firebaseReducer
})