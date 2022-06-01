import { GET_DATA_WEEK } from "../const/action-types";

const DataWeek = (state = [], action) => {
  if (action.type === GET_DATA_WEEK) {
    state = action.data;
  }

  return state;
};

export default DataWeek;
