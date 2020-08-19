import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button, Color } from '../../components';
import { Counter } from './components';
import { cartActions } from '../../store/actions';

import emptyImage from '../../assets/images/empty.png';
import './Cart.sass';

const Cart = ({ items = [], removeGoodFromCart, changeGoodQuantity }) => {
	const totalCost = items.reduce((acc, good) => acc += good.cost * good.quantity, 0);
	return (
		<main className="Cart">
			<section className="Cart__section">
				<div className="container">
					<div className="box">
						<h2 className="title title--big">Корзина</h2>
						{/* <h2 className="title title--big Cart__total">{totalCost} руб.</h2> */}
					</div>

					<div className="Cart__items">

					{
						items.length ? items.map(good => (
							<div className="Cart__item" key={good._id + good.color}>
								<figure>
									<img src={good.image || emptyImage} alt="Good"/>
								</figure>

								<Link to={`/goods/${good._id}`} className="Cart__item-name">
									<h3 title={good.name} className="title title--small">{good.name}</h3>
								</Link>

								<Color
									className="Cart__item-color"
									color={good.color}
								/>

								<Counter 
									className="Cart__item-quantity"
									onChange={(val) => changeGoodQuantity({
										_id: good._id,
										color: good.color
									}, val)}
									quantity={good.quantity}
								/>

								<div className="Cart__item-cost Card__cost">{good.cost * good.quantity} руб.</div>

								<Button 
									onClick={() => removeGoodFromCart({
										_id: good._id,
										color: good.color
									})}
									className="Cart__item-removeBtn Header__permitted"
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

					<div className="box">
						<h2 className="title title--big Cart__total">{totalCost} руб.</h2>

						<div>
							<Link to={`/cart/order`}>
								<Button 
									variant="black"
									content="Оформить заказ"
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default connect(
	({ cart }) => ({ items: cart.items }),
	cartActions
)(Cart)