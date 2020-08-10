import React from 'react';
import { render } from '@testing-library/react';
import User from '../user';

test('9. User componnet .', () => {
  const { getByText } = render(<User />);
  const linkElement = getByText(/Edit user details:/i);
  expect(linkElement).toBeInTheDocument();
});
