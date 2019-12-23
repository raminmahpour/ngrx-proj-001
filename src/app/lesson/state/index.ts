// Homework
import { Lesson } from '../lesson';

/* NgRx */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, LessonActionTypes } from './lesson.actions';
import { LessonState } from './lesson.reducer';


// Selector functions
const getLesspnState = createFeatureSelector<LessonState>('lessons');

export const getId = createSelector(
  getLesspnState,
  state => state.id
);

export const getTitle = createSelector(
  getLesspnState,
  state => state.title
);
// export const getLessons = createSelector(
//   getLesspnState,
//   state => state
// );
