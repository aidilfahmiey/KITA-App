import { USER_STATE_CHANGE } from '../constants/index';
import Firebase from '../../database/firebase';

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
