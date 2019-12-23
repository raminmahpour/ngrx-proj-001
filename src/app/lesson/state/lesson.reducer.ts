import { Lesson } from '../lesson';

/* NgRx */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, LessonActionTypes } from './lesson.actions';

// State for this feature (User)
export interface LessonState {

  title: string;
  lessons: Lesson[];
  // test: String;
}

const initialState: LessonState = {

  title: "nothing",
  lessons: []
  // test: 'ramin'
};

export function reducer(state = initialState, action: UserActions): LessonState {
  switch (action.type) {
    case LessonActionTypes.Title:
      return {
        ...state,
        title: action.payload
      };
    case LessonActionTypes.LoadSuccess:
      return {
        ...state,
        lessons: action.payload,
      };
    case LessonActionTypes.LoadFail:
      return {
        ...state,
        lessons: []
      };


    default:
      return state;
  }
}
