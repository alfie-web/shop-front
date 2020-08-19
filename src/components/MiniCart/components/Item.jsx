import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { cartActions } from '../../../store/actions';
import { Button } from '../../';
import emptyImage from '../../../assets/images/empty.png';

const Item = ({ _id, color, image, cost, quantity, name, removeGoodFromCart }) => {
	return (
		<div className="MiniCart__item" key={_id + color}>
			<figure>
				<img src={image || emptyImage} alt="Good"/>
			</figure>
			<div className="MiniCart__item-info">
				<Link to={`/goods/${_id}`}>
					<h3 className="Card__name" title={name}>{name}</h3>
				</Link>
				<div className="MiniCart__item-cost Card__cost">{cost} руб. / {quantity} шт.</div>
			</div>
			<Button 
				onClick={() => removeGoodFromCart({
					_id,
					color
				})}
				className="MiniCart__removeBtn Header__permitted"
				content={
					<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.51038 0L9.67896 8.16859L8.26475 9.5828L0.0961623 1.41421L1.51038 0Z" />
						<path d="M0 8.18201L8.17948 0.00252628L9.59369 1.41674L1.41421 9.59622L0 8.18201Z" />
					</svg>
				} 
				rounded 
			/>
		</div>
	)
}

export default connect(null, cartActions)(Item)