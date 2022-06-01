import { GET_DATA_TODAY } from "../const/action-types";

const DataToday = (state = [], action) => {
  if (action.type === GET_DATA_TODAY) {
    state = action.data;
  }

  return state;
};

export default DataToday;
