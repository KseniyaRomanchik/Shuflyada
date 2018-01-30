// @flow

import { createModule } from 'redux-modules';
import { propCheck } from 'redux-modules-middleware';
import { Map } from 'immutable';
import PropTypes from 'prop-types';

type AppReducer = {
  screenSize: string
}

const initialState: AppReducer = {
  screenSize: 'md'
};

export default createModule({
  name: 'app',
  initialState: Map(initialState),
  selector: state => state.get('app'),
  transformations: {
    setScreenSize: {
      middleware: [propCheck(value =>
        PropTypes.checkPropTypes({
          payload: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
        }, value)
      )],
      reducer: (state, { payload }) => state.set('screenSize', payload)
    }
  }
});
