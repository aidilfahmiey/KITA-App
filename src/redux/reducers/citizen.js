import { USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE, USERS_DATA_STATE_CHANGE, CLEAR_DATA} from '../constants'

const initialState= {
    currentUser: null,
    posts: []
}

export const citizen= (state= initialState, action)=> {
    switch(action.type){
        case USER_STATE_CHANGE:
            return{
                ...state,
                currentUser: action.currentUser
            }
        case USER_POSTS_STATE_CHANGE:
            return{
                ...state,
                posts: action.posts
            }
        case USERS_DATA_STATE_CHANGE:
            return{
                ...state,
                users: [...state.users, action.user]
            }
        case CLEAR_DATA:
            return{
                currentUser: null,
                posts: []
            }
        default:
            return state;
    }
           
        
    
}
