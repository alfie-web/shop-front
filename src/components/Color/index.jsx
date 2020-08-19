import React from 'react';
import classNames from 'classnames';

import './Color.sass';

export default function Color({ color, className }) {
	return (
		<div title={color} className={classNames('Color', className)} 
			style={{
				backgroundColor: color
			}}
		>
			
		</div>
	)
}