import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://server-lilac-eta.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
