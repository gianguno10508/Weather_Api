import { GET_CITY_DATA } from "../const/action-types";

const ChooseCity = (state = [], action) => {
  if (action.type === GET_CITY_DATA) {
    state = action.data;
  }

  return state;
};

export default ChooseCity;
