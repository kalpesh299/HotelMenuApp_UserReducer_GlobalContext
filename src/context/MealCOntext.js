import { createContext, useContext, useEffect, useReducer } from "react"
import mealReducer from "../reducers/MealReducer";
import { fetcoCategoryData } from "../actions/AllmealActions";

const MealContext=createContext();

const initialState={
    isLoading:false,
    categoryList:[],
    fetchCategoryError:""
}

const MealProvider=({children})=>{
 const[state,dispatch]=useReducer(mealReducer,initialState)

//  useEffect(()=>{

//     fetcoCategoryData(dispatch)

//  },[])       

    return (
        <MealContext.Provider value={{state,dispatch}}>
        {children}
    </MealContext.Provider>
    )
}

const useMealcontext=()=>{
 const context=useContext(MealContext);
   return context;

}

export {MealProvider,useMealcontext}

