import { redirect } from "react-router-dom"
import {
    FETCH_CATEGORY_STARTED,
    FETCH_CATEGORY_SUCCESSED,
    FETCH_CATEGORY_ERORR,
    FETCH_CATEGORY_SEARCH,
    FETCH_CATEGORY_SEARCH_ERORR
} from "../actions/actions.js"
import { api } from "../api/axios.js"

import {FETCH_CAEGORIES,SEARCH_URL } from "../utils/Urls/Urls.js"

export const fetcoCategoryData=async(dispatch)=>{

try{
dispatch({type:FETCH_CATEGORY_STARTED})
const response=await api.get(`${FETCH_CAEGORIES}`)
    dispatch({type:FETCH_CATEGORY_SUCCESSED,payload:response.data.categories})
    
}catch(error){
   dispatch({type:FETCH_CATEGORY_ERORR,payload:error.message})
}


}

export const fetchMealBysearch=async (cat,dispatch)=>{
   try{
    const response=await api.get(`${SEARCH_URL}${cat}`)
    // console.log(response)
    dispatch({
        
        type:FETCH_CATEGORY_SEARCH,
        payload:response.data.meals
       
    })

   }catch(error){
       dispatch({type:FETCH_CATEGORY_SEARCH_ERORR,payload:error.message})
   }
}