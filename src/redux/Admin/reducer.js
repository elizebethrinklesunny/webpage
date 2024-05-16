import { actionTypes } from "./action";
export const initialState = {
    listweather: "",
    
   
}
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.WEATHER:
            return { ...state, listweather: "" };
        case actionTypes.WEATHER_SUCCESS:
            return { ...state, listweather: action.payload };
        case actionTypes.WEATHER_ERROR:
            return { ...state, listweather: "" };

     

       

        default:
            return state;
    }
};

export default adminReducer;