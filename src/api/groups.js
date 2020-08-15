import api from './api';

const groupsAPI = {
	getAll: () => api.get('/groups'),
	// getGoodsByGroup: (groupId) => api.get(`/groups/${groupId}`),		// Пока вернёт товары вместе с группой
	// getGoodsByGroup: (groupId) => api.get(`/groups/goods/${groupId}`),		// Пока вернёт товары вместе с группой
	getGoodsByGroup: (groupId, position) => api.get(`/groups/goods?group=${groupId}&position=${position}`),		// Пока вернёт товары вместе с группой
}

export default groupsAPI;