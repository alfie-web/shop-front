import api from './api';

const groupsAPI = {
	getAll: () => api.get('/groups'),
	getGoodsByGroup: (groupId) => api.get(`/groups/${groupId}`),		// Пока вернёт товары вместе с группой
}

export default groupsAPI;