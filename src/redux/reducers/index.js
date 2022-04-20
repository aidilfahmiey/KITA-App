import {combineReducers} from 'redux';
import {citizen} from './citizen';

const Reducers = combineReducers({
    userState: citizen
});

export default Reducers;