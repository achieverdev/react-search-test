import React from 'react';
import { render } from '@testing-library/react';
import UserItem from '../UserItem';

test('4. UserItem App componnet .', () => {
  const { getByText } = render(<UserItem />);
  const linkElement = getByText(/Edit/i);
  expect(linkElement).toBeInTheDocument();
});
