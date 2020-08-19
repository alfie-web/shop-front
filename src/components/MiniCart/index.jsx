import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './MiniCart.sass';
import Item from './components/Item';

const MiniCart = ({ className, items = [] }) => {
	return (
		<div className={classNames('MiniCart', className)}>
			<div className="MiniCart__items">
				{
					items.length ? items.map(good => (
						<Item 
							key={good._id + good.color}
							_id={good._id}
							color={good.color}
							image={good.image}
							cost={good.cost}
							quantity={good.quantity}
							name={good.name}
						/>
						
					))
					: <h3 className="title title--normal MiniCart__empty">Корзина пуста :(</h3>
				}
			</div>

			<div className="MiniCart__bottom">
				<Link to={`/cart`} className="link">Перейти в корзину</Link>
				<h3 className="title title--small MiniCart__total">{
					items.reduce((acc, good) => acc += good.cost * good.quantity, 0)
				} руб.</h3>
			</div>
		</div>
	)
}

export default MiniCart;
