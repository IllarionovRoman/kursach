import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer, productDeleteReducer, productCreateReducer} from './reducers/productReducers'
import {userLoginReducer, userDeleteReducer,
userRegisterReducer, userDetailsReducer, userUpdateProfileReducer,
userUpdateReducer,
userListReducer} from './reducers/userReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productCreate: productCreateReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    productDelete: productDeleteReducer,
    userUpdate: userUpdateReducer,



})
const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin:{userInfo:userInfoFromStorage}
}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store