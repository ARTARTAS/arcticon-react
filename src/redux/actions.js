import store from "./store";

const fetchDataAction = (payload) => {
  console.log("fetch data " + payload);
  return {
    type: "FETCH_DATA",
    payload: payload,
  };
};
const addDataAction = (payload) => {
  console.log("add data " + payload);
  return {
    type: "ADD_DATA",
    payload: payload,
  };
};

export const fetchData = () => {
  console.log("run fetch");
  return (dispatch) => {
    var data = "hello world";
    console.log("we create data: " + data);
    dispatch(fetchDataAction(data));
  };
};

export const AddData = (payload) => {
  return (dispatch) => {
    dispatch(addDataAction(payload));
  };
};
