import React from 'react';
import { render } from '@testing-library/react';
import ReactDom from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />,);
  ReactDom.unmountComponentAtNode(div);
});


