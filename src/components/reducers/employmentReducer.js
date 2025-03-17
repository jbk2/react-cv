export default function employmentReducer(state, action) {
  switch(action.type) {
    case "UPDATE":
      return {
        ...state, // { 1: {a: {}, b: {}}, 2: {}}
        [action.id]: {
          ...state[action.id],
          [action.fieldName]: action.payload
        }
      }
    case "ADD": {
      return {
        ...state,
        [crypto.randomUUID()]: { employerName:'', jobTitle:'', startDate:'', endDate:'', roleDescription:'' }
      }
    }
    case "DELETE": {
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    }
    default:
      return state;
  }
};