import React, { useEffect } from 'react'
import { useMealcontext } from '../context/MealCOntext'
import { fetcoCategoryData } from '../actions/AllmealActions.js'
import { Card } from './Card.js';

export const Categories = () => {
    const{state,dispatch}=useMealcontext();
    


// useEffect(()=>{
    //     const fetcoCategoryData=async()=>{

    //         try{
    //         dispatch({type:FETCH_CATEGORY_STARTED})
    //         const response=await api.get(`${FETCH_USERS}`)
    //             dispatch({type:FETCH_CATEGORY_SUCCESSED,payload:response.data})
                
    //         }catch(error){
    //            dispatch({type:FETCH_CATEGORY_ERORR,payload:error.message})
    //         }
            
            
    //         }
    //         fetcoCategoryData();
    // },[]) //also can do using this

    useEffect(()=>{
        fetcoCategoryData(dispatch);
        
    },[])

   
    console.log(state.categoryList)
  return (
    <div className=' w-10/12 m-auto'>
      <h1 className='text-start text-black text-3xl pt-5 mb-5 pb-2 w-1/6 font-bold font-mono border-b-2  border-yellow-300'>Categories</h1>
   <div className='flex justify-evenly flex-wrap'>
   {state.categoryList.map((cat)=>{
    return(
      <Card url={cat.strCategoryThumb} category={cat.strCategory}/>
    )
   })}
   </div>
    </div>
  )
}
