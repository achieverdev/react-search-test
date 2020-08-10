import React from 'react';
import { render } from '@testing-library/react';
import UserList from '../UserList';

test('5. UserList App componnet .', () => {
  const { getByText } = render(<UserList />);
  const linkElement = getByText(/Please search !/i);
  expect(linkElement).toBeInTheDocument();
});
