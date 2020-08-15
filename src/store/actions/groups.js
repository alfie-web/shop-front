import { groupsAPI } from '../../api';

const groupsActions = {
	setIsFetching: isFetching => ({
		type: 'GROUPS:SET_IS_FETCHING',
		payload: isFetching
	}),

	setItems: items => ({
		type: 'GROUPS:SET_ITEMS',
		payload: items
	}),

	setGoodsToGroup: (groupId, goods) => ({
		type: 'GROUPS:SET_GOODS_TO_GROUP',
		payload: {groupId, goods}
	}),

	fetchAll: () => async dispatch => {
		dispatch(groupsActions.setIsFetching(true));

		try {
			const { data } = await groupsAPI.getAll();

			if (data.status === 'success') dispatch(groupsActions.setItems(data.data));
			dispatch(groupsActions.setIsFetching(false));

		} catch (e) {
			dispatch(groupsActions.setIsFetching(false));
		}
	},

	fetchGoodsByGroup: (groupId) => async dispatch => {
		try {
			const {data} = await groupsAPI.getGoodsByGroup(groupId);

			// console.log(data)
			dispatch(groupsActions.setGoodsToGroup(groupId, data.data.Goods))
		} catch (e) {
			console.log('Что-то пошло не так')
		}
	}
}

export default groupsActions;