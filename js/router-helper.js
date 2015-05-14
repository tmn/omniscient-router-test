import React from 'react';
import omniscient from 'omniscient';

const component = omniscient.withDefaults({
  jsx: true
});

const RouterHelper = (Handler, structure, path) => {
  let listener;

  return component('Router' + Handler.displayName, {
    componentDidMount: function () {
      listener = (swappedPath) => {
        this.forceUpdate();
      };
      structure.on('swap', listener);
    },
    componentWillUnmount: function () {
      structure.off('swap', listener);
    }
  }, function (props) {
    return <Handler {...props} cursor={structure.cursor(path)} />;
  });
};

export default RouterHelper;
