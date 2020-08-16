import api from './api';

const groupsAPI = {
	getAll: () => api.get('/groups'),
	getGoodsByGroup: (groupId, position) => api.get(`/groups/goods?group=${groupId}&position=${position}`),		// Пока вернёт товары вместе с группой
}

export default groupsAPI;