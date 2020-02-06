import { messageActions } from "../actionTypes"

export default function messageReducer(state = [], action) {
    switch(action.type) {
        case messageActions.GET_MESSAGES:
        return [...state, action.message]
        break
        default:
            return action.messages
    }
}