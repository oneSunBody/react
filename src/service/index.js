import axios from "axios"

//请求主页水果数据
export const getFruitsData = ()=>{
    return axios.get("/fruitsData")
  }