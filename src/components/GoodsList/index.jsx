import React, { useEffect, memo } from 'react';
import classNames from 'classnames';

import { Card } from '../';

const GoodsList = memo(({ group, className, fetchGoodsByGroup }) => {
	const { _id, goods } = group;

	// console.log('GoodsList_RENDERS')

	useEffect(() => {
		!goods && fetchGoodsByGroup(_id);
	}, [fetchGoodsByGroup, _id, goods])

	return (
		<div className={classNames(className)}>
			{
				goods && goods.map((item) => {
					return item ? (
						<Card 
							key={item._id}
							id={item._id}
							name={item.name}
							cost={item.cost}
							image={item.image}
						/>
					) : null
				})
			}
		</div>
	)
})

export default GoodsList;