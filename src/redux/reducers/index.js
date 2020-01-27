import { combineReducers } from "redux"

import PostReducer from "./postsReducer"

export default combineReducers({
    postsList: PostReducer
})