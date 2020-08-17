import React from 'react';
import classNames from 'classnames';

import './Button.sass';

export default function Button({ 
	className, 
	content = '', 
	onClick = () => {}, 
	type = 'button',
	variant,
	rounded
}) {
	return (
		<button 
			className={classNames('Button', {
				'Button--black': variant && variant === 'black',
				'Button--red': variant && variant === 'red',
				'Button--blue': variant && variant === 'blue',
				'Button--rounded': rounded,
			}, className)}
			onClick={onClick}
			type={type}
			
		>
			{content}
		</button>
	)
}
