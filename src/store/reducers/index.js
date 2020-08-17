import { combineReducers } from 'redux';
import goodsReducer from './goods';
import groupsReducer from './groups';
import cartReducer from './cart';

const rootReducer = combineReducers({
	goods: goodsReducer,
	groups: groupsReducer,
	cart: cartReducer
});

export default rootReducer;