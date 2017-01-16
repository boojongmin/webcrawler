import {INIT} from '../actions';

let defaultHosts = {list: []}

export const hosts = (state = defaultHosts, action) => {
  switch(action.type) {
    case INIT:
      return Object.assign({},
                           state,
                           { list: action.list });
    default:
      return state;
  }
};

