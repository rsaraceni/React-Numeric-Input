import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';

const min = 7;
const max = 20;

export default function InputNumber() {
  const [value, setValue] = React.useState("");

	return (
   	<div>
      	<TextField
				label="Number (7/20)"
        		fullWidth
        		type="number"
				inputProps={{ min, max }}
				value={value}
				onChange={(e) => {
          		var value = parseInt(e.target.value, 20);

					if (value > max) value = max;
					if (value < min) value = min;

          		setValue(value);
        		}}
        		variant="outlined"
				sx={{ m: 1, width: '25ch' }}
				InputProps={{
					endAdornment: <InputAdornment position="end">%</InputAdornment>,
				}}
      	/>
    	</div>
  	);
}
