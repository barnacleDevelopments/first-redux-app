export default function messageReducer (state = [], action) {
    switch (action.type) {
      case "GET_MESSAGES" :
        return [
          ...state,
          action.message
        ];
      default:
        return state;
    }
  };
