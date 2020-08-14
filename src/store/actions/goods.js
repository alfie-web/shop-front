import { goodsAPI } from '../../api';

const goodsActions = {
	setIsFetching: isFetching => ({
		type: 'GOODS:SET_IS_FETCHING',
		payload: isFetching
	}),

	setItems: items => ({
		type: 'GOODS:SET_ITEMS',
		payload: items
	}),

	fetchAll: () => async dispatch => {
		dispatch(goodsActions.setIsFetching(true));

		try {
			const { data } = await goodsAPI.getAll();

			if (data.status === 'success') dispatch(goodsActions.setItems(data.data));
			dispatch(goodsActions.setIsFetching(false));

		} catch (e) {
			dispatch(goodsActions.setIsFetching(false));
		}
	}
}

export default goodsActions;