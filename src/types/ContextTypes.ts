import { TripListType } from "./TripTypes"

export type Action = {
  type: string;
  payload: any;
};

export type State = {
  order: string;
  cache: any,
  trips: TripListType[],
  tripByStyleObj: any,
};