import {createStore, compose} from "redux"
import messageReducer from "../redux/reducers/message-reducer"

const Store = createStore(messageReducer)

export default Store