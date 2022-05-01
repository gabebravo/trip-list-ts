import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { GlobalContext } from '../context/global';

export default function TripSort() {
  const globalReducer = React.useContext(GlobalContext);
  const { state, dispatch }: any = globalReducer;
  const { order } = state;

  const handleChange = () => {
    dispatch({ type: 'TOGGLE_SORT_ORDER' });
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="trip-select-sort-label">Sort Date</InputLabel>
      <Select
        labelId="trip-select-sort-label"
        id="trip-select-sort"
        value={order}
        label="Sort Date"
        onChange={handleChange}
      >
        <MenuItem value="asc">Closest</MenuItem>
        <MenuItem value="desc">Furthest</MenuItem>
      </Select>
    </FormControl>
  );
}
