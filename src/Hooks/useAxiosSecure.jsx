import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://adopt-joy-hub-server-site.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
}

export default useAxiosSecure