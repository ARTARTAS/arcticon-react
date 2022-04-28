const initialState = {
  data: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload
      };
    case "ADD_DATA":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;
