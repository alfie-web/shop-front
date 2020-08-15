import React, { memo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import emptyImage from '../../assets/images/empty.png';

import './Card.sass';

const Card = memo(({ className, image, name, cost, id }) => {
	// console.log('CARD_RENDERS')
	return (
		<div className={classNames('Card', className)}>
			<figure className="Card__image">
				<img src={image || emptyImage} alt="Good"/>
			</figure>

			<div className="Card__info">
				<Link to={`/goods/${id}`} ><h3 className="Card__name">{name}</h3></Link>

				<div className="Card__bottom">
					<div className="Card__cost">{cost} руб.</div>
					<button className="Card__addToCart">
						<span>2</span>
						<svg viewBox="0 0 25 23" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.9729 4.21507H4.42589L4.13534 0.978153C4.08781 0.448811 3.64418 0.0432129 3.11273 0.0432129H1.02671C0.459672 0.0432129 0 0.502885 0 1.06992C0 1.63696 0.459672 2.09663 1.02671 2.09663H2.17408C2.8011 9.08225 1.18057 -8.97299 3.35494 15.2526C3.43874 16.2008 3.95107 17.2297 4.83364 17.9289C3.24239 19.961 4.69631 22.9567 7.28474 22.9567C9.4331 22.9567 10.9484 20.8141 10.2116 18.7847H15.831C15.0952 20.8115 16.6072 22.9567 18.7579 22.9567C20.4742 22.9567 21.8706 21.5604 21.8706 19.844C21.8706 18.1276 20.4742 16.7313 18.7579 16.7313H7.29168C6.51177 16.7313 5.83214 16.2607 5.5388 15.5752L21.947 14.6109C22.3949 14.5846 22.7739 14.2703 22.8828 13.835L24.969 5.49078C25.1307 4.84376 24.6409 4.21507 23.9729 4.21507ZM7.28474 20.9033C6.70069 20.9033 6.22547 20.4281 6.22547 19.844C6.22547 19.2599 6.70069 18.7847 7.28474 18.7847C7.86884 18.7847 8.34406 19.2599 8.34406 19.844C8.34406 20.4281 7.86884 20.9033 7.28474 20.9033ZM18.7578 20.9033C18.1737 20.9033 17.6985 20.4281 17.6985 19.844C17.6985 19.2599 18.1737 18.7847 18.7578 18.7847C19.3419 18.7847 19.8171 19.2599 19.8171 19.844C19.8171 20.4281 19.3419 20.9033 18.7578 20.9033ZM21.0736 12.6053L5.26242 13.5344L4.61021 6.26844H22.6579L21.0736 12.6053Z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
})

export default Card;