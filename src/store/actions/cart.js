
import LocalStorage from '../../helpers/LocalStorage';

const cartActions = {
	addGood: (good) => ({
		type: 'CART:ADD_GOOD',
		payload: good
	}),

	removeGood: (goodIndex) => ({
		type: 'CART:REMOVE_GOOD',
		payload: goodIndex
	}),

	addGoodToCart: good => dispatch => {
		good = {
			...good,
			quantity: 1
		}

		// А вообще конечно вопрос, нужно ли хранить в store?
		// TODO: Установить какой-то лимит по одинарному заказу
		// TODO: Очищать, когда заказ оформлен
		dispatch(cartActions.addGood(good));

		const cart = LocalStorage.get('SNOWFLAKE_CART') || [];
		const findedIndex = cart.findIndex(item => item._id === good._id && item.color === good.color)

		// Что если цвета будут храниться в массиве???  Нее, проблема в том, что а как удалять товар с корзины

		if (findedIndex >= 0) {
			cart[findedIndex].quantity += 1;
		} else {
			cart.push(good);
		}

		LocalStorage.set('SNOWFLAKE_CART', cart);
	},

	removeGoodFromCart: (good) => dispatch => {	
		const cart = LocalStorage.get('SNOWFLAKE_CART') || [];
		const findedIndex = cart.findIndex(item => item._id === good._id && item.color === good.color)
		const newCart = cart.filter((item, i) => i !== findedIndex);

		dispatch(cartActions.removeGood(findedIndex));

		LocalStorage.set('SNOWFLAKE_CART', newCart);
	}
}

export default cartActions;