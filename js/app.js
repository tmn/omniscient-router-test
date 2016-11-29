import D from 'react-dom';
import component from 'omniscient';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import observer from 'omnipotent/decorator/observer';
import data from './data';


/* Components
------------------------------------------------------------------------------*/
const TestComponent1 = component('TestComponent1', ({ test }) => (
  <div>
    <p>test: { test.deref() }</p>
  </div>
));

const TestComponent2 = component('TestComponent2', ({ test2 }) => (
  <div>
    <p>test2: { test2.deref() }</p>
  </div>
));


/* Application
------------------------------------------------------------------------------*/
const App = ({ children }) => (
  <div>
    <h2>omniscient-router-test</h2>

    <ul>
      <li><Link to="test">Test</Link></li>
      <li><Link to="test2">Test2</Link></li>
    </ul>

    { children }
  </div>
);


/* Routers
------------------------------------------------------------------------------*/
const RouterTest1 = observer(data, { test: ['test'] }, TestComponent1);
const RouterTest2 = observer(data, { test2: ['test2'] }, TestComponent2);

D.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ RouterTest1 } />

      <Route path="test" component={ RouterTest1 } />
      <Route path="test2" component={ RouterTest2 } />
    </Route>
  </Router>,
  document.getElementById('mainContent')
);
