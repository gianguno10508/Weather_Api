import axiosClient from "./axiosClient";

const Data = {
  getAll: (urlLink) => {
    const url = urlLink;
    return axiosClient.get(url);
  },
};
export default Data;
