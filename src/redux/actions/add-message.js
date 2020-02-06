export default function addMessage(message) {
    return {
      type: "GET_MESSAGES",
      message: message
    }
  };