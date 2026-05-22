import axios from "axios";

const axiosSecure = axios.create({
  baseURL:
    "https://docappoint-server-hz5a.onrender.com",

  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
