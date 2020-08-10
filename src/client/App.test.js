import React from 'react';
import { render } from '@testing-library/react';
import App from '../client/containers/App';

test('1. Test App componnet .', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/User Search App/i);
  expect(linkElement).toBeInTheDocument();
});
