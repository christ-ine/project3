import { 
    QUESTION_LIST_REQUEST, 
    QUESTION_LIST_SUCCESS, 
    QUESTION_LIST_FAIL, 
    QUESTION_CREATE_REQUEST, 
    QUESTION_CREATE_SUCCESS, 
    QUESTION_CREATE_FAIL, 
    QUESTION_CREATE_RESET ,
    QUESTION_DETAILS_REQUEST,
    QUESTION_DETAILS_SUCCESS,
    QUESTION_DETAILS_FAIL,
    QUESTION_CREATE_COMMENT_REQUEST,
    QUESTION_CREATE_COMMENT_SUCCESS,
    QUESTION_CREATE_COMMENT_FAIL,
    QUESTION_CREATE_COMMENT_RESET
} from "../constants/questionConstants"

export const questionListReducer = (state = {questions: [] }, action) => {
    switch (action.type) {
        case QUESTION_LIST_REQUEST:
            return { loading: true, questions: [] }
        case QUESTION_LIST_SUCCESS:
            return { 
                loading: false, 
                questions: action.payload, 
                // pages: action.payload.pages,
                // page: action.payload.page
            }
        case QUESTION_LIST_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const questionCreateReducer = (state =  {}, action) => {
    switch (action.type) {
        case QUESTION_CREATE_REQUEST:
            return { loading: true }
        case QUESTION_CREATE_SUCCESS:
            return { loading: false, success: true, question: action.payload }
        case QUESTION_CREATE_FAIL:
            return { loading: false, error: action.payload}
        case QUESTION_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const questionDetailsReducer = (state = {question: { comments: []} }, action) => {
    switch (action.type) {
        case QUESTION_DETAILS_REQUEST:
            return { loading: true, ...state }
        case QUESTION_DETAILS_SUCCESS:
            return { loading: false, question: action.payload }
        case QUESTION_DETAILS_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const questionCommentCreateReducer = (state =  { }, action) => {
    switch (action.type) {
        case QUESTION_CREATE_COMMENT_REQUEST:
            return { loading: true }
        case QUESTION_CREATE_COMMENT_SUCCESS:
            return { loading: false, success: true }
        case QUESTION_CREATE_COMMENT_FAIL:
            return { loading: false, error: action.payload}
        case QUESTION_CREATE_COMMENT_RESET:
            return { }
        default:
            return state
    }
}