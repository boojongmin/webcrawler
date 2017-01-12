import { INIT, init } from '../actions';
import { combineReducers } from 'redux';
import { hosts } from './HostList';

const reducers = combineReducers({
  hosts
});

export default reducers;