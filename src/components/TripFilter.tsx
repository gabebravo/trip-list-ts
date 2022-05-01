import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from "@mui/material";
import { GlobalContext } from '../context/global';
import { ContextDefaults } from '../types/ContextTypes';

export default function TripFilter() {
  const globalReducer = React.useContext(GlobalContext);
  const { state, dispatch }: ContextDefaults = globalReducer;
  const options: string[] = Object.values(state.cache.styles);
  const [type, setType] = React.useState(options[0]);

  React.useEffect(() => {
    if (type === 'All Vacations') {
      dispatch({ type: 'RESET_TRIPS' });
    } else {
      dispatch({ type: 'FILTER_BY_UNIT_STYLE', payload: { style: type } });
    }
  }, [type, dispatch]);

  // NOTE : TYPE DEF BAED ON WEIRD BUG WITH MUI SELECT
  const handleChange = (event: SelectChangeEvent<string>) => {
    setType(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="trip-select-filter-label">Unit Type</InputLabel>
      <Select
        labelId="trip-select-filter-label"
        id="trip-select-filter"
        value={type}
        label="Unit Type"
        onChange={handleChange}
      >
        {options.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
