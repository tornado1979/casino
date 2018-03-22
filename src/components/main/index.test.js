import React from 'react';
import ReactDOM from 'react-dom';
import Main from './index';

it('renders `Main` component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});
