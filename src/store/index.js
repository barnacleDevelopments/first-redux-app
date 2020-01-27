import {createStore, compose} from "redux"

import reducers from "../redux/reducers/index"

const Store = createStore(reducers)

export default Store