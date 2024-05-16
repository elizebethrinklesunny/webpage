import { all } from 'redux-saga/effects'
// import common from '../Common/commonSaga'
import Admin from '../Admin/saga'


export default function* rootSaga() {
    yield all([
        // common(),
        Admin(),
       
    ]);
}