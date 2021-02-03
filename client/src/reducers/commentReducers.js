import { 
    COMMENT_LIST_REQUEST, 
    COMMENT_LIST_SUCCESS, 
    COMMENT_LIST_FAIL 
} from "../constants/commentConstants"


export const commentListReducer = (state = {comments: [] }, action) => {
    switch (action.type) {
        case COMMENT_LIST_REQUEST:
            return { loading: true, comments: [] }
        case COMMENT_LIST_SUCCESS:
            return { 
                loading: false, 
                comments: action.payload, 
                // pages: action.payload.pages,
                // page: action.payload.page
            }
        case COMMENT_LIST_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}