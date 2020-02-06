export default function deleteMessage(selectedMessage) {
    return {
        type: "DELETE_MESSAGE",
        message: selectedMessage
    }
}