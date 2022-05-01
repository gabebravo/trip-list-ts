import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TripCard from './TripCard';
import { TripListType } from "../types/TripTypes"
import { GlobalContext } from '../context/global';
import { ContextDefaults } from '../types/ContextTypes';

export default function TripList() {
  const globalReducer = React.useContext(GlobalContext);
  const { state }: ContextDefaults = globalReducer;

  // Human readable date formatter MM/DD/YYYY
  const getDate = (date: Date): string => {
    const dateString = new Date(date);
    return dateString.toLocaleDateString(undefined);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {state.trips.map((trip: TripListType) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
            key={trip.curatedTripMasterInventoryId}
          >
            <TripCard
              title={trip.unitName}
              img={trip.heroImage}
              checkIn={getDate(trip.checkInDate)}
              unitType={trip.unitStyleName}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
