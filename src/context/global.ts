import React from 'react';
import trips from '../data/trips.json';
import { State, Action } from '../types/ContextTypes';

export const DEFAULT_STATE: State = {
  order: 'asc',
  cache: trips,
  trips: [],
  tripByStyleObj: {},
};

/// _____ GLOBAL CONTEXT FOR REDUCER ____________________
export const GlobalContext = React.createContext<State | any>(DEFAULT_STATE);

/// __________________ GLOBAL REDUCER ____________________
export function globalReducer(state: State, action: Action): State {
  const { type, payload } = action;

  // Sort Dates
  const sortDates = (order: string) =>
  [...state.trips].sort(function compare(a, b) {
    var dateA = new Date(a.checkInDate);
    var dateB = new Date(b.checkInDate);
    // @ts-ignore
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });

  // Cretes objcet that maps unitStyles to trips that match
  const formatTripsByStyle = () =>
    [...state.cache.tripSet].reduce((acc, trip) => {
      acc[trip.unitStyleName] =
        acc[trip.unitStyleName]?.length > 0
          ? [...acc[trip.unitStyleName], trip]
          : [trip];
      return acc;
    }, {});

  switch (type) {
    case 'RESET_TRIPS': {
      // RUNS ONCE ON THE ALL VACATIONS FILTER
      return {
        ...state,
        order: 'asc',
        trips: state.cache.tripSet,
      };
    }
    case 'SET_INIT_TRIPS': {
      // RUNS ONCE ON INIT TO SEED INTIAL : trips array & tripByStyleObj
      return {
        ...state,
        trips: state.cache.tripSet,
        tripByStyleObj: formatTripsByStyle(),
      };
    }
    case 'TOGGLE_SORT_ORDER': {
      // RUNS ANY TIME USER CLICKS ON THE SORT BUTTON TO TOGGLE ORDER
      const newOrder = state.order === 'asc' ? 'desc' : 'asc';
      return {
        ...state,
        order: newOrder,
        trips: sortDates(newOrder),
      };
    }
    case 'FILTER_BY_UNIT_STYLE': {
      // RUNS ANY TIME USER CLICKS ON A FILTER OPTION
      return {
        ...state,
        order: 'asc',
        trips: state.tripByStyleObj[payload.style],
      };
    }
    default:
      return state;
  }
}
