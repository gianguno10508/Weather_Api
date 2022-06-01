import { useEffect, useState } from "react";
import { connect } from "react-redux";

function WeatherDataWeek(props) {
  const [daySelected, setDaySelected] = useState(0);
  useEffect(() => {}, [props.data_week]);

  const handleItemClick = (event, index) => {
    setDaySelected(index);
  };
  return (
    <div>
      <div className="row pl-3">
        {props.data_week.map((w, index) => (
          <div
            key={w.dt}
            className="col-sm-3 pt-4 pb-4"
            onClick={(event) => handleItemClick(event, index)}
            index={index == daySelected ? "bg-info" : ""}
          >
            <h6>{new Date(w.dt * 1000).toDateString().slice(0, 10)}</h6>
            <div className="content pt-4">
              <h4>
                {Math.round(w.temp.min - 273.15)}°C -{" "}
                {Math.round(w.temp.max - 273.15)}°C
              </h4>
            </div>
            <div className="icon">
              <img
                src={
                  "https://openweathermap.org/img/wn/" +
                  w.weather[0].icon +
                  ".png"
                }
              />
            </div>
          </div>
        ))}
      </div>
      <div className="row mt-5">
        <div className="col-md-12 mb-3">
          <h4>
            {new Date(props.data_week[daySelected].dt * 1000)
              .toDateString()
              .slice(0, 10)}
          </h4>
        </div>
        <div className="col-md-6">
          <p>
            Temp current:{" "}
            {Math.round(props.data_week[daySelected].temp.day - 273.15)}°C
          </p>
          <p>
            Temp: {Math.round(props.data_week[daySelected].temp.min - 273.15)}°C
            - {Math.round(props.data_week[daySelected].temp.max - 273.15)}°C
          </p>
          <p>Humidity: {props.data_week[daySelected].humidity} %</p>
          <p>Wind Speed: {props.data_week[daySelected].wind_speed} km/h</p>
        </div>
        <div className="col-md-6">
          <p>Sunrise: {getTime(props.data_week[daySelected].sunrise, "hm")}</p>
          <p>Sunset: {getTime(props.data_week[daySelected].sunset, "hm")}</p>
          <p>
            Description: {props.data_week[daySelected].weather[0].description}
          </p>
          <p>
            Atmospheric pressure: {props.data_week[daySelected].pressure} hPa
          </p>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    list_city: state.city_data,
    data_week: state.data_week,
  };
};
function getTime(time) {
  var date = new Date(time * 1000);

  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

export default connect(mapStateToProps)(WeatherDataWeek);
