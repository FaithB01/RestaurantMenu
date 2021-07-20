import Button from './Button';
import { render,cleanup } from '@testing-library/react';

import ReactDom from 'react-dom';

afterEach(cleanup);
test('renders correctly',()=>{
  const div=document.createElement('div');
  render(<Button />);
  ReactDom.unmountComponentAtNode(div)
}
);
 
it('should be enabled', () => {
  const { getByTestId } = render(<Button />);
  expect(getByTestId('button')).toBeEnabled()
});



