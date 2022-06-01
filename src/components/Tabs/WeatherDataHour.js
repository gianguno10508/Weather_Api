import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function WeatherDataHour(props) {
  const [times, setTimes] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [feelLikeData, setFeelLike] = useState([]);

  useEffect(() => {
    if (Array.isArray(props.data_hour) && props.data_hour !== null) {
      var dataTimes = [];
      var dataFeelLike = [];
      var dataTemp = [];
      props.data_hour.map((item, index) => {
        if (index < 12) {
          dataTimes.push(getTime(item.dt));
          dataTemp.push(item.temp - 273.15);
          dataFeelLike.push(item.feels_like - 273.15);
        }
      });
      setTimes(dataTimes);
      setFeelLike(dataFeelLike);
      setTempData(dataTemp);
    }
  }, [props.data_hour]);

  return (
    <div className="row">
      <div className="col-md-12">
        <Line
          data={{
            labels: times,
            datasets: [
              {
                data: tempData,
                label: "Temp (°C)",
                borderColor: "#8e5ea2",
                fill: false,
              },
              {
                data: feelLikeData,
                label: "Feel like (°C)",
                borderColor: "#3cba9f",
                fill: false,
              },
            ],
          }}
          options={{
            title: {
              display: false,
              text: "Hourly temps",
            },
          }}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    list_city: state.city_data,
    data_hour: state.data_hour,
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

export default connect(mapStateToProps)(WeatherDataHour);
