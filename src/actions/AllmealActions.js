import {
    FETCH_CATEGORY_STARTED,
    FETCH_CATEGORY_SUCCESSED,
    FETCH_CATEGORY_ERORR
} from "../actions/actions.js"
import { api } from "../api/axios.js"

import {FETCH_CAEGORIES} from "../utils/Urls/Urls.js"

export const fetcoCategoryData=async(dispatch)=>{

try{
dispatch({type:FETCH_CATEGORY_STARTED})
const response=await api.get(`${FETCH_CAEGORIES}`)
    dispatch({type:FETCH_CATEGORY_SUCCESSED,payload:response.data.categories})
    
}catch(error){
   dispatch({type:FETCH_CATEGORY_ERORR,payload:error.message})
}


}