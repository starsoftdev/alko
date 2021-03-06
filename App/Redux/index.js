// @flow

import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

import AuthActions, { reducer as auth } from './AuthRedux';
import DrawerActions, { reducer as drawer } from './DrawerRedux';
import { reducer as location } from './LocationRedux';
import { reducer as alert } from './AlertRedux';
import { reducer as drinkup } from './DrinkupRedux';
import { reducer as bar } from './BarRedux';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    alert,
    auth,
    drawer,
    location,
    bar,
    drinkup,
  });

  return configureStore(rootReducer, rootSaga);
};

const mapDispatchToProps = dispatch => ({
  actions: {
    signOut: () => dispatch(AuthActions.signOut()),
    signIn: () => dispatch(AuthActions.signIn()),
    updateProfileProperty: (key, value) => dispatch(AuthActions.updateProfileProperty(key, value)),

    openDrawer: () => dispatch(DrawerActions.openDrawer()),
    closeDrawer: () => dispatch(DrawerActions.closeDrawer()),
    setActivePage: page => dispatch(DrawerActions.setActivePage(page)),
  },
});

export function Connect(component, mapStateToProps) {
  if (!mapStateToProps) {
    // eslint-disable-next-line no-param-reassign
    mapStateToProps = state => ({
      auth: state.auth,
    });
  }
  return connect(mapStateToProps, mapDispatchToProps)(component);
}
