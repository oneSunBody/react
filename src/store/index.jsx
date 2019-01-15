import { createStore, applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk";

import indexReducer from "./reducer/index"

const allReducer= combineReducers({
    indexReducer
})

export default createStore(allReducer, applyMiddleware(thunk))