import React from 'react';
import omniscient from 'omniscient';
import immstruct from 'immstruct';
import Router from 'react-router';

import RouterHelper from './router-helper';
import data from './SomeData';

const component = omniscient.withDefaults({
  jsx: true
});

const { Route, RouteHandler, DefaultRoute, Link } = Router;


/* Components
------------------------------------------------------------------------------*/
const Menu = component('Menu', _ => {
  return (
    <ul>
      <li><Link to="test">Test</Link></li>
      <li><Link to="test2">Test2</Link></li>
    </ul>
  );
});

const TestComponent1 = component('TestComponent1', () => {
  return (<div><p>test</p></div>);
});

const TestComponent2 = component('TestComponent2', () => {
  return (<div><p>test2</p></div>);
});


/* Application
------------------------------------------------------------------------------*/
const App = component('App',
  {
    shouldComponentUpdate: () => {
      return true;
    }
  },
  function () {
    return (
      <div>
        <h2>omniscient-router-test</h2>
        <Menu />
        <RouteHandler {...this.props} />
      </div>
    );
  }
);


/* Routers
------------------------------------------------------------------------------*/
const RouterTest1 = RouterHelper(TestComponent1, data, 'test');
const RouterTest2 = RouterHelper(TestComponent2, data, 'test2');

const routes = (
  <Route handler={App}>
    <DefaultRoute handler={RouterTest1} />
    <Route name="test" handler={RouterTest1} />
    <Route name="test2" handler={RouterTest2} />
  </Route>
);

Router.run(routes, (Handler, state) => {
  React.render(
    <Handler cursor={data.cursor()} statics={state} />,
    document.getElementById('mainContent')
  );
});
