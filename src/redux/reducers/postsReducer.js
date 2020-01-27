import { FETCH_POST_LIST } from "../actionTypes"

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_POST_LIST:
        return {...state, postList: action.payload}
        break
        default:
            return state
    }
}