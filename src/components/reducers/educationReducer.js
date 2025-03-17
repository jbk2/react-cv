export default function educationReducer(state, action) {
  switch(action.type) {
    case "UPDATE":
      return {...state,
        [action.id]: {
          ...state[action.id],
          [action.fieldName]: action.payload
        }
    };
    case "ADD": {
      const newID = crypto.randomUUID()
      return {...state,
        [newID]: {qualificationTitle: '', awardYear: ''}
      }
    };
    case "DELETE": {
      const newState = {...state};
      delete newState[action.id];
      return newState;
    };
    default:
      return state;
  }
}
