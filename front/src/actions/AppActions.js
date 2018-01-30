// @flow
import AppReducer from 'reducers/AppReducer';
import { defineScreenSize } from 'services/AppService';

export function setScreenSize() {

  return dispatch => dispatch(
    AppReducer.actions.setScreenSize(
      defineScreenSize(window.innerWidth)
    )
  );
}
