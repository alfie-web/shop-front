import LocalStorage from '../../helpers/LocalStorage';

const initialState = {
	items: LocalStorage.get('SNOWFLAKE_CART') || []
}

const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'CART:ADD_GOOD':
			return {
				...state,
				items: state.items.find(good => good._id === payload._id && good.color === payload.color) 
					? state.items.map(good => {
						if (good._id === payload._id && good.color === payload.color) {
							return {
								...good,
								quantity: good.quantity ? good.quantity + 1 : 1
							}
						}
						return good;
					})
					: [...state.items, payload]
			}
		default: return state;
	}
}

export default cartReducer;