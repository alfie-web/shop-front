import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { goodsActions } from '../../store/actions';
import { Card, Loader } from '../../components';

import './Home.sass';

// import good1 from '../../assets/images/good1.jpg';

// const MOCK_GOODS = [
// 	{
// 		id: '1',
// 		name: 'Кружка “Сердце” (в стиле пиксель арт)',
// 		cost: 790,
// 		image: good1
// 	},
// 	{
// 		id: '2',
// 		name: 'Мягкая подушка “Футбольный мяч”',
// 		cost: 800,
// 		image: ""
// 	},
// 	{
// 		id: '3',
// 		name: 'Чай “Новогоднее настроение”',
// 		cost: 350,
// 		image: ""
// 	},
// 	{
// 		id: '4',
// 		name: 'Чай “Новогоднее настроение 2”',
// 		cost: 350,
// 		image: ""
// 	}
// ];

const Home = ({ items, isFetching, fetchAll }) => {
	useEffect(() => {
		fetchAll();
	}, [fetchAll])

	return (
		<main className="Home">
			<section>
				<div className="container">
					<div className="box">
						<h2 className="title title--big">Новые</h2>
						<span>Select</span>
					</div>

					<div className="Home__goods">
					{
						items.map((item) => {
							return (
								<Card 
									key={item._id}
									id={item._id}
									name={item.name}
									cost={item.cost}
									image={item.image}
								/>
							)
						})
					}
					</div>

					{ isFetching &&
						<Loader />
					}
				</div>
			</section>
		</main>
	)
}

export default connect(({ goods }) => ({ items: goods.items, isFetching: goods.isFetching }), goodsActions)(Home);