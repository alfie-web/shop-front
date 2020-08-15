const initialState = {
	isFetching: false,
	items: []
}

const groupsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'GROUPS:SET_IS_FETCHING':
			return {
				...state,
				isFetching: payload
			}

		case 'GROUPS:SET_ITEMS':
			return {
				...state,
				items: payload
			}

		case 'GROUPS:ADD_ITEMS':
			return {
				...state,
				items: [
					...state.items,
					...payload
				]
			}

		case 'GROUPS:SET_GOODS_TO_GROUP': 
			return {
				...state,
				items: state.items.map(group => {
					if (group._id === payload.groupId) {
						return {
							...group,
							goods: payload.goods
						}
					}
					return group;
				})
			}

		default: return state;
	}
}

export default groupsReducer;