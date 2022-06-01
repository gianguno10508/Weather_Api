import { useEffect, useState } from "react";
import { connect } from "react-redux";

function WeatherDataToday(props) {
  useEffect(() => {}, [props.data_today]);
  return (
    <div className="row">
      <div className="col-sm-4 pt-4 pb-4">
        <h6>UV index</h6>
        <h2>{props.data_today.uvi}</h2>
      </div>
      <div className="col-sm-4 pt-4 pb-4">
        <h6>Wind Status</h6>
        <h2>{props.data_today.wind_speed} km/h</h2>
      </div>
      <div className="col-sm-4 pt-4 pb-4">
        <h6>Sunrise & Sunset</h6>
        <div>
          <small>Sunrise: </small>
          <h6>
            {props.data_today.sunrise ? getTime(props.data_today.sunrise) : ""}
          </h6>
        </div>
        <div>
          <small>Sunset: </small>
          <h6>
            {props.data_today.sunset ? getTime(props.data_today.sunset) : ""}
          </h6>
        </div>
      </div>
      <div className="col-sm-4 pt-4 pb-4">
        <h6>Humidity</h6>
        <h2>{props.data_today.humidity} %</h2>
      </div>
      <div className="col-sm-4 pt-4 pb-4">
        <h6>Visibility</h6>
        <h2>{props.data_today.visibility / 1000} km</h2>
      </div>
      <div className="col-sm-4 pt-4 pb-4">
        <h6>Pressure</h6>
        <h2>{props.data_today.pressure}</h2>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    list_city: state.city_data,
    data_today: state.data_today,
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
export default connect(mapStateToProps)(WeatherDataToday);
