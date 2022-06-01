import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WeatherDataHour from "./WeatherDataHour";
import WeatherDataToday from "./WeatherDataToday";
import WeatherDataWeek from "./WeatherDataWeek";
function MainTabs() {
  return (
    <div className="content-right">
      <Tabs>
        <TabList>
          <Tab>Today</Tab>
          <Tab>Week</Tab>
          <Tab>Hour</Tab>
        </TabList>
        <TabPanel>
          <WeatherDataToday />
        </TabPanel>
        <TabPanel>
          <WeatherDataWeek />
        </TabPanel>
        <TabPanel>
          <WeatherDataHour />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default MainTabs;
