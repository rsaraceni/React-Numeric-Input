// https://www.npmjs.com/package/react-numeric-input
// https://github.com/vlad-ignatov/react-numeric-input
// http://vlad-ignatov.github.io/react-numeric-input

import React from "react";

import NumericInput from 'react-numeric-input';

export default function ReactNumericInput() {
	const [num, setNum] = React.useState("");

	const min = 7;
	const max = 20;

	return (
		<div>
			<h3>React Numeric Input</h3>

			<NumericInput
				placeholder="Number (min 7 / max 20)"
				value={ num } 
				onChange={ setNum }
				min={ min } 
				max={ max }
				step={ 1 }
				required
			/> 
		</div>
  	);
}
