import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import reviewErrorsReducer from "./reviews_errors_reducer";

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    reviewErrors: reviewErrorsReducer
});

export default errorsReducer;