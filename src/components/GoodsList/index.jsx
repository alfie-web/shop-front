import React, { useState, useEffect, useCallback, memo, Fragment } from 'react';
import classNames from 'classnames';

import { Card, Button } from '../';

const GoodsList = memo(({ group, className, fetchGoodsByGroup }) => {
	const { _id, goods } = group;

	console.log('GoodsList_RENDERS')

	const fetchGoods = useCallback(() => {
		fetchGoodsByGroup(_id)
	}, [fetchGoodsByGroup, _id])

	useEffect(() => {
		if (!goods) {
			fetchGoods()
		};
	}, [fetchGoods, goods])

	return (
		<Fragment>
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

			{ !group.isLastPage &&
				<Button 
					content="Показать ещё"
					// variant="black"
					onClick={fetchGoods}
				/>
			}
			
		</Fragment>
	)
})

export default GoodsList;










// import React, { useState, useEffect, useCallback, memo, Fragment } from 'react';
// import classNames from 'classnames';

// import { Card, Button } from '../';

// const GoodsList = memo(({ group, className, fetchGoodsByGroup }) => {
// 	const { _id, goods } = group;
// 	const [state, setState] = useState({
// 		currentPage: 0,
// 		isLastPage: false
// 	});
// 	// console.log('GoodsList_RENDERS')

// 	const changeState = useCallback((newProps) => {
// 		setState({
// 			...state,
// 			...newProps
// 		})
// 	}, [state])

// 	const fetchGoods = useCallback(() => {
// 		fetchGoodsByGroup(_id, state.currentPage)
// 			.then(isLastPage => {
// 				// console.log('isLastPage', isLastPage)
// 				changeState({
// 					isLastPage,
// 					currentPage: isLastPage ? state.currentPage : state.currentPage + 1
// 				})
// 			})
// 	}, [fetchGoodsByGroup, _id, state.currentPage, changeState])

// 	useEffect(() => {
// 		if (!goods) {
// 			fetchGoods()
// 		};
// 	}, [fetchGoods, goods])

// 	return (
// 		<Fragment>
// 			<div className={classNames(className)}>
// 				{
// 					goods && goods.map((item) => {
// 						return item ? (
// 							<Card 
// 								key={item._id}
// 								id={item._id}
// 								name={item.name}
// 								cost={item.cost}
// 								image={item.image}
// 							/>
// 						) : null
// 					})
// 				}
// 			</div>
// 			{ !state.isLastPage &&
// 				<Button 
// 					content="Показать ещё"
// 					// variant="black"
// 					onClick={fetchGoods}
// 				/>
// 			}
			
// 		</Fragment>
// 	)
// })

// export default GoodsList;