import axios from 'axios'
import { 
    QUESTION_LIST_REQUEST, 
    QUESTION_LIST_SUCCESS, 
    QUESTION_LIST_FAIL, 
    QUESTION_CREATE_REQUEST, 
    QUESTION_CREATE_SUCCESS, 
    QUESTION_CREATE_FAIL,
    QUESTION_DETAILS_REQUEST,
    QUESTION_DETAILS_SUCCESS,
    QUESTION_DETAILS_FAIL
} from '../constants/questionConstants'

export const listQuestions = () => async(dispatch) => {
    try {
        dispatch({type: QUESTION_LIST_REQUEST})

        const { data } = await axios.get(`/questions/getAll`)

        dispatch({
            type: QUESTION_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: QUESTION_LIST_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        })
    }

}

export const createQuestion = (questionData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: QUESTION_CREATE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${userInfo.token}`
        //     }
        // }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: userInfo.isAuthenticated
            }
        }

        const { data } = await axios.post('/authenticated/postQuestion', questionData , config)

        dispatch({
            type: QUESTION_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: QUESTION_CREATE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        })
    }
}

export const listQuestionDetails = (id) => async(dispatch) => {
    try {
        dispatch({type: QUESTION_DETAILS_REQUEST})

        const { data } = await axios.get(`/questions/${id}`)

        dispatch({
            type: QUESTION_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: QUESTION_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        })
    }

}
