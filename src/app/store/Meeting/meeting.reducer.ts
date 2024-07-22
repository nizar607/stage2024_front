import {Action, createReducer, on} from '@ngrx/store';
import {
  addMeetingData,
  addMeetingDataSuccess,
  deleteMeetingFailure,
  deleteMeetingSuccess,
  fetchMeetingData,
  fetchMeetingFailure,
  fetchMeetingSuccess,
  updateMeetingData,
  updateMeetingDataSuccess
} from './meeting.action';


export interface MeetingState {
  meetingData: any[];
  loading: boolean;
  error: any;
}

export const initialState: MeetingState = {
  meetingData: [],
  loading: false,
  error: null
};

export const MeetingReducer = createReducer(
  initialState,
  on(fetchMeetingData, (state) => {
    return {...state, loading: true, error: null};
  }),
  on(fetchMeetingSuccess, (state, {meetingdata}) => {
    return {...state, meetingdata, loading: false};
  }),
  on(fetchMeetingFailure, (state, {error}) => {
    return {...state, error, loading: false};
  }),

  on(addMeetingDataSuccess, (state, {newData}) => {
    return {...state, customerdata: [newData, ...state.meetingData], error: null};

  }),
  on(updateMeetingDataSuccess, (state, {updatedData}) => {
    return {
      ...state,
      customerdata: state.meetingData.map((meetingdata) => meetingdata.id === updatedData.id ? updatedData : meetingdata),
      error: null
    };
  }),

  on(deleteMeetingSuccess, (state, {id}) => {
    return {...state, customerdata: state.meetingData.filter((meetingData) => meetingData.id !== id), error: null}
  }),
)

// Selector
export function reducer(state: MeetingState | undefined, action: Action) {
  return MeetingReducer(state, action);
}
