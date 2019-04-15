import React from 'react';
import ReactDOM from 'react-dom';
import AppDefault from './AppDefault';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppDefault />, div);
  ReactDOM.unmountComponentAtNode(div);
});
