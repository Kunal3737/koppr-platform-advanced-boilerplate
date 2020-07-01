const { reduce } = require("lodash");
const { red } = require("@material-ui/core/colors");

const initialState = {
    usersData: [],
    usersError: '',
    usersAppData: [],
    usersAppError: ''
  };
  
  const sampleReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
      case "USERS_LIST":
        return {
          ...state,
          usersData: action.payload,
        };
        case "USERS_LIST_ERROR":
          return {
            ...state,
            usersError: action.payload
          }
        case "USERS_APP_LIST":
          return {
            ...state,
            usersAppData: action.payload
          }
          case "USERS_APP_ERROR":
            return {
              ...state,
              usersAppError: action.payload
            }
      default:
        return state;
    }
  };
  
  export default sampleReducer;