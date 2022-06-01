import { GET_DATA_HOUR } from "../const/action-types";

const DataHour = (state = [], action) => {
  if (action.type === GET_DATA_HOUR) {
    state = action.data;
  }

  return state;
};

export default DataHour;
