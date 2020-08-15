import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { groupsActions } from '../../store/actions';
import { Loader, GoodsList } from '../../components';

import './Home.sass';


const Home = ({ items, isFetching, fetchAll, fetchGoodsByGroup }) => {
	useEffect(() => {
		!items.length && fetchAll();
	}, [fetchAll, items])

	return (
		<main className="Home">
			{
				items && items.map(group => (
					<section key={group._id} className="Home__section">
						<div className="container">
							<div className="box">
								<h2 className="title title--big">{group.name}</h2>
								{/* <span>Select</span> */}
							</div>

							<GoodsList 
								className="Home__goods"
								fetchGoodsByGroup={fetchGoodsByGroup}
								group={group}
							/>

							{/* <div className="Home__goods">
							{
								group.Goods.map((item) => {
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
							</div> */}

							{/* <Button 
								content="Показать ещё"
								// variant="black"
							/> */}
						</div>
					</section>
				))
			}
			
			<div className="container">
				{ isFetching &&
					<Loader />
				}
			</div>

			<section></section>
		</main>
	)
}

export default connect(({ groups }) => ({ items: groups.items, isFetching: groups.isFetching }), groupsActions)(Home);