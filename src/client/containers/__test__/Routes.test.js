import React from 'react';
import { render } from '@testing-library/react';
import Routes from '../Routes';

test('7. Routes componnet .', () => {
  const { getByText } = render(<Routes />);
  const linkElement = getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
