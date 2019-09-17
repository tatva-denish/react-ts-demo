import { ThunkAction } from 'redux-thunk';

//action type for auth 
export enum AuthActionTypes {
  FETCH_AUTH = 'FETCH_AUTH',
  FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS',
  FETCH_AUTH_FAIL = 'FETCH_AUTH_FAIL',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
  FETCH_AUTH_CHECK = 'FETCH_AUTH_CHECK'
}