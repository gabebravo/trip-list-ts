import React from 'react';
import { GlobalContext } from './context/global';
import Box from '@mui/material/Box';
import TripFilter from './components/TripFilter';
import TripList from './components/TripList';
import TripSort from './components/TripSort';

export default function App() {
  const globalReducer = React.useContext(GlobalContext);
  const { dispatch } = globalReducer;

  React.useEffect(() => {
    dispatch({ type: 'SET_INIT_TRIPS' });
  }, [dispatch]);

  return (
    <section>
      <div className="header-layout">
        {' '}
        <header>
          <h1>Trip List</h1>
        </header>
        <div role="toolbar" className="button-layout">
          <TripFilter />
          <TripSort />
        </div>
      </div>
      <div>
        <Box sx={{ marginTop: 3 }}>
          <TripList />
        </Box>
      </div>
    </section>
  );
}
