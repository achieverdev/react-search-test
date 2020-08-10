import React from 'react';
import { render } from '@testing-library/react';
import Search from '../search';

test('8. Search componnet .', () => {
  const { getByText } = render(<Search />);
  const linkElement = getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
