import axios from "axios";


const request = axios.create({
    baseURL: "https://684561cbfc51878754db3692.mockapi.io/tiktok/api/"
})

export const get = async (path, options = []) =>{
    const response = await request.get(path, options)
    return response.data
}


export default request 
