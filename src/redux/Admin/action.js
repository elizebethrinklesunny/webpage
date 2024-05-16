export const actionTypes = {
    WEATHER: "WEATHER",
    WEATHER_SUCCESS: "WEATHER_SUCCESS",
    WEATHER_ERROR: "WEATHER_ERROR",
  
    
    
    
  };
  export const weather = (payload) => {
    return {
      type: actionTypes.WEATHER,
      payload,
    };
  };
  export const weatherSucces = (payload) => {
    return {
      type: actionTypes.WEATHER_SUCCESS,  
      payload,
    };
  };
  export const weatherError = (payload) => {
    return {
      type: actionTypes.WEATHER_ERROR,
      payload,
    };
  };
  
 
  
  