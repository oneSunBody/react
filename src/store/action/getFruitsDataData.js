
import {getFruitsData} from "service/index.js"
export default (params) => {
    return (dispatch) => {
        return getFruitsData().then(({data})=>{
            console.log(data)
            return dispatch({type:"UPDATA",payload:data})
        })
    }
}
