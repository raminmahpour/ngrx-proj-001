// Homework
import { Lesson } from '../lesson';

/* NgRx */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, LessonActionTypes } from './lesson.actions';
import { LessonState } from './lesson.reducer';


// Selector functions
const getLessonState = createFeatureSelector<LessonState>('lessons');

// export const getId = createSelector(
//   getLessonState,
//   state => state.id
// );

export const getTitle = createSelector(
  getLessonState,
  state => state.title
);
export const getLessons = createSelector(
  getLessonState,
  state => state.lessons
);

// export const getLessons = createSelector(
//   getLessonState,
//   state => state
// );
