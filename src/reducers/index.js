import { combineReducers } from "redux";
import ChooseCity from "./ChooseCity";
import DataToday from "./GetDataToday";
import DataWeek from "./GetDataWeek";
import DataHour from "./GetDataHour";

export default combineReducers({
  city_data: ChooseCity,
  data_today: DataToday,
  data_week: DataWeek,
  data_hour: DataHour,
});
