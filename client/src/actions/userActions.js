import axios from 'axios'
import { 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_FAIL, 
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_QUESTIONS_REQUEST,
    USER_QUESTIONS_SUCCESS,
    USER_QUESTIONS_FAIL,
    USER_COMMENTS_REQUEST,
    USER_COMMENTS_SUCCESS,
    USER_COMMENTS_FAIL,
    USER_UPDATE_ACCOUNT_REQUEST,
    USER_UPDATE_ACCOUNT_SUCCESS,
    USER_UPDATE_ACCOUNT_FAIL,
    USER_MY_ACCOUNT_REQUEST,
    USER_MY_ACCOUNT_SUCCESS,
    USER_MY_ACCOUNT_FAIL
 } from '../constants/userConstants'

export const login = (userName, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/passport/login/', 
            { userName, password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT})
}

export const register = (userName, email, password, lastName, firstName) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/passport/register/', 
            { userName, email, password, lastName, firstName },
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        // dispatch({
        //     type: USER_LOGIN_SUCCESS,
        //     payload: data
        // })

        // localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/users/${id}`, 
            config
        )

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        })
    }
}

export const getUserQuestions = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_QUESTIONS_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/questions/UserQuestions//${id}`, 
            config
        )

        dispatch({
            type: USER_QUESTIONS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_QUESTIONS_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        })
    }
}

export const getUserComments = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_COMMENTS_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.get(
            `/comments/getUserComments/${id}`, 
            config
        )

        dispatch({
            type: USER_COMMENTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_COMMENTS_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        })
    }
}


export const updateMyAccount = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_ACCOUNT_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.put(`/users/changeUser`, user, config)

        dispatch({
            type: USER_UPDATE_ACCOUNT_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_UPDATE_ACCOUNT_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        })
    }
}


