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

		case 'CART:REMOVE_GOOD':
			return {
				...state,
				// items: state.items.filter(good => good._id !== payload._id && good.color !== payload.color)
				items: state.items.filter((good, i) => i !== payload)
			}

		case 'CART:CHANGE_GOOD_QUANTITY':
			return {
				...state,
				items: state.items.map((good, i) => {
					if (i === payload.goodIndex) {
						return {
							...good,
							quantity: good.quantity = payload.quantity
						}
					}
					return good
				})
			}

		default: return state;
	}
}

export default cartReducer;