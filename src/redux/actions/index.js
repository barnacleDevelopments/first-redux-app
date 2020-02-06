import { messageActions } from "../actionTypes"

export const addMessage = messages => ({
    type: messageActions.GET_MESSAGES,
    messages: messages
})