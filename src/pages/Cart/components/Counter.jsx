import React, { useState } from 'react';
import classNames from 'classnames';

import './Counter.sass';

export default function Counter({ className, quantity = 1, onChange }) {
	const [val, setVal] = useState(quantity);

	const onValChange = (newVal) => {
		if (val === 1 && newVal < 1) return;

		newVal += val;

		setVal(newVal);
		onChange(newVal);
	}

	return (
		<div className={classNames('Counter', className)}>
			<div className="Counter__btn" onClick={() => onValChange(-1)}>–</div>
			{/* <div className="Counter__btn Counter__minus" onClick={() => onValChange(-1)}>-</div> */}
			<div className="Counter__quantity">{val}</div>
			<div className="Counter__btn" onClick={() => onValChange(1)}>+</div>
		</div>
	)
}

