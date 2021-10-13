
import React from "react";

import InputNumber from 'react-input-number';

export default function ReactInputNumber() {
	const [num, setNum] = React.useState("");

	const min = 7;
	const max = 20;

	return (
		<div>
			<h3>React Input Number</h3>

			<InputNumber 
				min={ min } 
				max={ max }
				step={ 1 } 
				value={ num } 
				onChange={ setNum } 
			/> 
		</div>
  	);
}