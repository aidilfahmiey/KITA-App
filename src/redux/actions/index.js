import { USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE, USERS_DATA_STATE_CHANGE, CLEAR_DATA } from '../constants/index';
import Firebase from '../../database/firebase';

export function clearData() {
    return ((dispatch) => {
        dispatch({type: CLEAR_DATA})
    })
}
export function fetchUser(){
    return((dispatch)=> {
        Firebase.firestore()
        .collection("users")
        .doc(Firebase.auth().currentUser.uid)
        .get()
        .then((snapshot)=> {
            if(snapshot.exists){
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
            }
            else{
                console.log('does not exist')
            }
        })
    })
}

export function fetchUserPosts(){
    return((dispatch)=> {
        Firebase.firestore()
        .collection("posts")
        .doc(Firebase.auth().currentUser.uid)
        .collection("userPosts")
        .orderBy("creation", "asc")
        .get()
        .then((snapshot)=> {
            let posts = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return {id, ...data}
            })
           console.log(posts)
           dispatch({type: USER_POSTS_STATE_CHANGE, posts })
           
        })
    })
}
