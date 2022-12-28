import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET


} from '../constants/productConstants'
import axios from 'axios'

export const listProducts = (keyword = '') => async (dispatch) => {
    try{
        dispatch({type: PRODUCT_LIST_REQUEST})
        const {data} = await axios.get(`/api/products${keyword}`)
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch(error){
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
    try{
        dispatch({type: PRODUCT_DELETE_REQUEST})
        const {
            userLogin:{userInfo}, } = getState()
        console.log(id);
        const config = {
            headers: {
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.delete(
            `/api/products/delete/${id}`,
            config
        )

        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
        })


    } catch(error){
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}
export const createProduct = () => async (dispatch, getState) => {
    try{
        dispatch({type: PRODUCT_CREATE_REQUEST})
        const {
            userLogin:{userInfo} } = getState()

        const config = {
            headers: {
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.post(
            `/api/products/create/`,
            {},
            config
        )

        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload:data
        })


    } catch(error){
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}
