const initialState = {
	isFetching: false,
	items: []
}

const goodsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'GOODS:SET_IS_FETCHING':
			return {
				...state,
				isFetching: payload
			}

		case 'GOODS:SET_ITEMS':
			return {
				...state,
				items: payload
			}

		case 'GOODS:ADD_ITEMS':
			return {
				...state,
				items: [
					...state.items,
					...payload
				]
			}

		default: return state;
	}
}

export default goodsReducer;