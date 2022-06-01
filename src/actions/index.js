import { GET_CITY_DATA } from "../const/action-types";
import { GET_DATA_TODAY } from "../const/action-types";
import { GET_DATA_WEEK } from "../const/action-types";
import { GET_DATA_HOUR } from "../const/action-types";
export const actChooseCity = (data) => {
  return {
    type: GET_CITY_DATA,
    data,
  };
};
export const actGetDataToday = (data) => {
  return {
    type: GET_DATA_TODAY,
    data,
  };
};
export const actGetDataWeek = (data) => {
  return {
    type: GET_DATA_WEEK,
    data,
  };
};
export const actGetDataHour = (data) => {
  return {
    type: GET_DATA_HOUR,
    data,
  };
};
