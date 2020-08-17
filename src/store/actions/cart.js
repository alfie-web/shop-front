
import LocalStorage from '../../helpers/LocalStorage';

const cartActions = {
	addGood: (good) => ({
		type: 'CART:ADD_GOOD',
		payload: good
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

		if (findedIndex >= 0) {
			cart[findedIndex].quantity += 1;
		} else {
			cart.push(good);
		}

		LocalStorage.set('SNOWFLAKE_CART', cart);
	}
}

export default cartActions;