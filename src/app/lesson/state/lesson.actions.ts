/* NgRx */
import { Action } from '@ngrx/store';
import { Lesson } from '../lesson';

export enum LessonActionTypes {
  Title = '[Lesson] Mask Title',
  Load = '[Lesson] Load',
  LoadSuccess = '[Lesson] Load Success',
  LoadFail = '[Lesson] Load Fail',

}

export class MaskTitle implements Action {
  readonly type = LessonActionTypes.Title;

  constructor(public payload: string) { }
}

export class Load implements Action {
  readonly type = LessonActionTypes.Load;
}


export class LoadSuccess implements Action {
  readonly type = LessonActionTypes.LoadSuccess;

  constructor(public payload: Lesson[]) { }
}

export class LoadFail implements Action {
  readonly type = LessonActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export type UserActions = MaskTitle
| LoadSuccess
| LoadFail
| Load;
