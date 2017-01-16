import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import Hello from './components/Hello';
import BodyWrap from './components/BodyWrap';
import HostListContainer from './containers/HostListContainer';

injectTapEventPlugin();

const store = createStore(reducers);
const appElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Hello} />
        <Route path="/hello" components={Hello} />
        <Route path="/hello2" components={BodyWrap} />
        <Route path="/hello3" components={HostListContainer} />
      </Route>
    </Router>
  </Provider>,
  appElement
);
