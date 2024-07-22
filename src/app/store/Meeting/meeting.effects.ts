import {Injectable} from "@angular/core";
import {of} from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CrudService} from "src/app/core/services/crud.service";
import {
  addMeetingData,
  addMeetingDataFailure,
  addMeetingDataSuccess,
  deleteMeetingData,
  deleteMeetingFailure,
  deleteMeetingSuccess,
  fetchMeetingData,
  fetchMeetingFailure,
  fetchMeetingSuccess,
  updateMeetingData,
  updateMeetingDataFailure,
  updateMeetingDataSuccess
} from "./meeting.action";
import {meetingModel} from "./meeting.model";

@Injectable()

export class MeetingEffects {
  fetchData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchMeetingData),
      mergeMap(() =>
        this.CrudService.fetchData('/app/customerList').pipe(
          map((meetingdata: meetingModel[]) => fetchMeetingSuccess({meetingdata})),
          catchError((error) =>
            of(fetchMeetingFailure({error}))
          )
        )
      )
    )
  );

  addData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addMeetingData),
      mergeMap(({newData}) =>
        this.CrudService.addData('/app/customerList', newData).pipe(
          map(() => addMeetingDataSuccess({newData})),
          catchError((error) => of(addMeetingDataFailure({error})))
        )
      )
    )
  );

  updateData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateMeetingData),
      mergeMap(({updatedData}) =>
        this.CrudService.updateData('/app/customerList', updatedData).pipe(
          map(() => updateMeetingDataSuccess({updatedData})),
          catchError((error) => of(updateMeetingDataFailure({error})))
        )
      )
    )
  );

  deleteData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteMeetingData),
      mergeMap(({id}) =>
        this.CrudService.deleteData('/app/customerList').pipe(
          map(() => deleteMeetingSuccess({id})),
          catchError((error) => of(deleteMeetingFailure({error})))
        )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private CrudService: CrudService
  ) {
  }
}
