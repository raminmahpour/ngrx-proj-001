import { User } from '../user';

/* NgRx */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from './user.actions';

// State for this feature (User)
export interface UserState {
  maskUserName: boolean;
  currentUser: User;
 // test: String;
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null,
 // test: 'ramin'
};

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.MaskUserName:
      return {
        ...state,
        maskUserName: action.payload
      };

    default:
      return state;
  }
}
