import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('6. App componnet .', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/User Search App/i);
  expect(linkElement).toBeInTheDocument();
});
