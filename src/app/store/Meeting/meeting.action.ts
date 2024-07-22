import { createAction, props } from '@ngrx/store';
import { meetingModel } from './meeting.model';

// fetch Meeting data
export const fetchMeetingData = createAction('[Data] Fetch Meeting Table Data');
//export const fetchMeetingSuccess = createAction('[Data] Fetch Meeting Data Success', props<{ Meetingdata: meetingModel[] }>());

export const fetchMeetingSuccess = createAction('[Data] Fetch Meeting Data Success', props<{ meetingdata: meetingModel[] }>());
export const fetchMeetingFailure = createAction('[Data] Fetch Meeting Data Failure', props<{ error: string }>());

// Add Data
export const addMeetingData = createAction(
    '[Data] Add MeetingData',
    props<{ newData: meetingModel }>()
);
export const addMeetingDataSuccess = createAction(
    '[Data] Add MeetingData Success',
    props<{ newData: meetingModel }>()
);
export const addMeetingDataFailure = createAction(
    '[Data] Add MeetingData Failure',
    props<{ error: string }>()
);


// Update Data
export const updateMeetingData = createAction(
    '[Data] Update MeetingData',
    props<{ updatedData: meetingModel }>()
);
export const updateMeetingDataSuccess = createAction(
    '[Data] Update MeetingData Success',
    props<{ updatedData: meetingModel }>()
);
export const updateMeetingDataFailure = createAction(
    '[Data] Update MeetingData Failure',
    props<{ error: string }>()
);

// Delete Data
export const deleteMeetingData = createAction(
    '[Data] Delete MeetingData',
    props<{ id: string }>()
);
export const deleteMeetingSuccess = createAction(
    '[Data] Delete MeetingData Success',
    props<{ id: string }>()
);
export const deleteMeetingFailure = createAction(
    '[Data] Delete MeetingData Failure',
    props<{ error: string }>()
);
