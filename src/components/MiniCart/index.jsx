import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import emptyImage from '../../assets/images/empty.png';
import { Button } from '../';
import './MiniCart.sass';

const MiniCart = ({ className, items = [] }) => {
	return (
		<div className={classNames('MiniCart', className)}>
			<div className="MiniCart__items">
				{
					items.length ? items.map(good => (
						<div className="MiniCart__item" key={good._id}>
							<figure>
								<img src={good.image || emptyImage} alt="Good"/>
							</figure>
							<div className="MiniCart__item-info">
								<Link to={`/goods/${good._id}`} >
									<h3 className="Card__name" title={good.name}>{good.name}</h3>
								</Link>
								<div className="MiniCart__item-cost Card__cost">{good.cost} руб. / {good.quantity} шт.</div>
							</div>
							<Button 
								className="MiniCart__removeBtn"
								content={
									<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
										<path d="M1.51038 0L9.67896 8.16859L8.26475 9.5828L0.0961623 1.41421L1.51038 0Z" />
										<path d="M0 8.18201L8.17948 0.00252628L9.59369 1.41674L1.41421 9.59622L0 8.18201Z" />
									</svg>
								} 
								rounded 
							/>
						</div>
					))
					: <h3 className="title title--normal MiniCart__empty">Корзина пуста :(</h3>
				}
			</div>

			<div className="MiniCart__bottom">
				<Link to={`/cart`} >Перейти в корзину</Link>
				<h3 className="title title--small MiniCart__total">{
					items.reduce((acc, good) => acc += good.cost * good.quantity, 0)
				} руб.</h3>
			</div>
		</div>
	)
}

export default MiniCart;
