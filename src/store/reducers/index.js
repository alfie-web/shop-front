import { combineReducers } from 'redux';
import goodsReducer from './goods';
import groupsReducer from './groups';

const rootReducer = combineReducers({
	goods: goodsReducer,
	groups: groupsReducer,
});

export default rootReducer;