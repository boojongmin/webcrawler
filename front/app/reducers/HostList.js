import {INIT} from '../actions';

export const hosts = (state = {}, action) => {
  switch(action.type) {
    case INIT:
      return Object.assign({}, state,
                           {
                             list: action.list
                           });
    default:
      return state;
  }
};

