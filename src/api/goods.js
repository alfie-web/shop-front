import api from './api';

const goodsAPI = {
	getAll: () => api.get('/goods'),
}

export default goodsAPI;