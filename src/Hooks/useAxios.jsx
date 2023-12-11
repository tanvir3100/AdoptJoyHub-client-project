import axios from 'axios'

export const axiosSecure = axios.create({
    baseURL: 'https://adopt-joy-hub-server-site.vercel.app/'
})

const useAxios = () => {
    return axiosSecure
};

export default useAxios;