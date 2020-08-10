import React from 'react';
import { render } from '@testing-library/react';
import UserForm from '../UserForm';

test('2. UserForm App componnet .', () => {
  const { getByText } = render(<UserForm />);
  const linkElement = getByText(/Body :/i);
  expect(linkElement).toBeInTheDocument();
});
