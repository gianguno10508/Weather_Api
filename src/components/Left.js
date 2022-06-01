import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  actChooseCity,
  actGetDataHour,
  actGetDataToday,
  actGetDataWeek,
} from "../actions";
import Data from "../api/GetData";
import { API_KEY } from "../const/ApiKey";

function Left(props) {
  const [weatherCurrent, setweatherCurrent] = useState([]);
  const [value, setValue] = useState("Hà Nội");
  useEffect(() => {
    const fetchDataLatAndLon = async () => {
      try {
        const responseDataCity = await Data.getAll(
          "https://api.openweathermap.org/geo/1.0/direct?q=" +
            value +
            "&limit=1&appid=" +
            API_KEY
        );
        if (responseDataCity) {
          props.chooseCity(responseDataCity);
          let lat = responseDataCity[0]["lat"];
          let lon = responseDataCity[0]["lon"];
          const responseData = await Data.getAll(
            "https://api.openweathermap.org/data/2.5/onecall?lat=" +
              lat +
              "&lon=" +
              lon +
              "&appid=" +
              API_KEY
          );
          setweatherCurrent(responseData.current);
          props.dataToday(responseData.current);
          props.dataWeek(responseData.daily);
          props.dataHour(responseData.hourly);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataLatAndLon();
  }, [value]);
  return (
    <div className="content-left">
      <div className="row mb-3 mt-3">
        <div className="box-search-city col-md-12">
          <input
            name="city"
            type="text"
            placeholder="Search"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                setValue(event.target.value);
              }
            }}
          />
        </div>
      </div>
      <div className="pt-5 pb-5 pl-4 pr-4 bg-dark text-white">
        <h3>{value}</h3>
        <h1 className="mt-3 mb-3" title="Feels Like">
          {Math.round(weatherCurrent.temp - 273.15)} °C
        </h1>
        <h4>{weatherCurrent.dt ? getTime(weatherCurrent.dt) : ""}</h4>
        <h6>
          {Array.isArray(weatherCurrent.weather)
            ? weatherCurrent.weather[0].description
            : " "}
        </h6>
        <h6>Clouds {weatherCurrent.clouds}%</h6>
        {Array.isArray(weatherCurrent.weather) ? (
          <img
            src={
              "http://openweathermap.org/img/wn/" +
              weatherCurrent.weather[0].icon +
              ".png"
            }
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    chooseCity: (data) => {
      dispatch(actChooseCity(data));
    },
    dataToday: (data) => {
      dispatch(actGetDataToday(data));
    },
    dataWeek: (data) => {
      dispatch(actGetDataWeek(data));
    },
    dataHour: (data) => {
      dispatch(actGetDataHour(data));
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    list_city: state.city_data,
    data_today: state.data_today,
    data_week: state.data_week,
    data_hour: state.data_hour,
  };
};

function getTime(time) {
  var date = new Date(time * 1000);
  var day = date.getDay();
  const options = { weekday: "long" };
  var day = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    day +
    ", " +
    date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Left);
