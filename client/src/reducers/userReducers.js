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
    USER_DETAILS_RESET,
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
    USER_MY_ACCOUNT_FAIL,
} from '../constants/userConstants'

export const userLoginReducer = (state = { }, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userRegisterReducer = (state = { }, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true }
        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload }
        case USER_DETAILS_FAIL:
            return { loading: false, error: action.payload}
        case USER_DETAILS_RESET:
            return { user: {} }
        default: 
            return state
    }
}

export const userQuestionsReducer = (state = { user: [] }, action) => {
    switch (action.type) {
        case USER_QUESTIONS_REQUEST:
            return { ...state, loading: true }
        case USER_QUESTIONS_SUCCESS:
            return { loading: false, user: action.payload }
        case USER_QUESTIONS_FAIL:
            return { loading: false, error: action.payload}
        default: 
            return state
    }
}

export const userCommentsReducer = (state = { user: [] }, action) => {
    switch (action.type) {
        case USER_COMMENTS_REQUEST:
            return { ...state, loading: true }
        case USER_COMMENTS_SUCCESS:
            return { loading: false, user: action.payload }
        case USER_COMMENTS_FAIL:
            return { loading: false, error: action.payload}
        default: 
            return state
    }
}

export const userUpdateAccountReducer = (state = { }, action) => {
    switch (action.type) {
        case USER_UPDATE_ACCOUNT_REQUEST:
            return { loading: true }
        case USER_UPDATE_ACCOUNT_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }
        case USER_UPDATE_ACCOUNT_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const userMyAccountReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_MY_ACCOUNT_REQUEST:
            return { ...state, loading: true }
        case USER_MY_ACCOUNT_SUCCESS:
            return { loading: false, user: action.payload }
        case USER_MY_ACCOUNT_FAIL:
            return { loading: false, error: action.payload}
        default: 
            return state
    }
}