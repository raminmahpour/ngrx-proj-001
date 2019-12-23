import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';

import { LessonService } from '../lesson.service';
import { Lesson } from '../lesson';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as lessonActions from './lesson.actions';

@Injectable()
export class LessonEffects {

  constructor(private lessonService: LessonService,
              private actions$: Actions) { }

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(lessonActions.LessonActionTypes.Load),tap(s=>{debugger;}),
    mergeMap(action =>
      this.lessonService.getProducts().pipe(
        tap(s=>{debugger;}),
        map(products => (new lessonActions.LoadSuccess(products))),
        catchError(err => of(new lessonActions.LoadFail(err)))
      )
    )
  );

}
