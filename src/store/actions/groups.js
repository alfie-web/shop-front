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

	setPaginateInfoToGroup: (groupId, isLastPage, currentPage) => ({
		type: 'GROUPS:SET_PAGINATE_INFO_TO_GROUP',
		payload: {groupId, isLastPage, currentPage}
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


	fetchGoodsByGroup: (groupId) => async (dispatch, getState) => {
		const { groups } = getState();
		const groupObj = groups.items.find((item) => item._id === groupId);	// Либо можно его вытаскивать из компоненты
		let page = groupObj.currentPage ? groupObj.currentPage : 0;

		try {
			const {data} = await groupsAPI.getGoodsByGroup(groupId, page);
			page = data.data.isLastPage ? page : page + 1;

			dispatch(groupsActions.setGoodsToGroup(groupId, data.data.goods));
			dispatch(groupsActions.setPaginateInfoToGroup(groupId, data.data.isLastPage, page));

		} catch (e) {
			console.log('Что-то пошло не так');
		}
	}
}

export default groupsActions;