import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
    userLoginReducer, 
    userRegisterReducer, 
    userDetailsReducer,
    userQuestionsReducer,
    userCommentsReducer
} from './reducers/userReducers'
import { questionListReducer, questionCreateReducer, questionDetailsReducer, questionCommentCreateReducer } from './reducers/questionReducers'
import { commentListReducer } from './reducers/commentReducers'


const reducer = combineReducers({
    questionList: questionListReducer,
    questionCreate: questionCreateReducer,
    questionDetails: questionDetailsReducer,
    questionCommentCreate: questionCommentCreateReducer,
    userLogin: userLoginReducer, 
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userQuestions: userQuestionsReducer,
    userComments: userCommentsReducer,
    commentList: commentListReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') 
? JSON.parse(localStorage.getItem('userInfo')) 
: null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default store