import {
    FETCH_CATEGORY_STARTED,
    FETCH_CATEGORY_SUCCESSED,
    FETCH_CATEGORY_ERORR,
    FETCH_CATEGORY_SEARCH,
    FETCH_CATEGORY_SEARCH_ERORR
} from "../actions/actions.js"


const mealReducer=(state,action)=>{

                 switch (action.type) {
                    case FETCH_CATEGORY_STARTED:
                            return {...state,isLoading:true};
                    case FETCH_CATEGORY_SUCCESSED:
                        return {...state,isLoading:false,categoryList:action.payload} 
                  case FETCH_CATEGORY_ERORR:
                    return {...state,fetchCategoryError:action.payload}
                    case FETCH_CATEGORY_SEARCH:
                        return{...state, searchmealList:action.payload}
                        case FETCH_CATEGORY_SEARCH_ERORR:
                            return{...state,searchmealerror:action.payload}
                    default:
                        return state;
                 }

}

export default mealReducer;