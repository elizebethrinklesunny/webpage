// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports

// import common from '../Common/commonReducer'
import Admin from '../Admin/reducer'


const rootReducer = combineReducers({
  
//   common,
  Admin,
})

export default rootReducer