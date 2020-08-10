import React from 'react';
import { render } from '@testing-library/react';
import UserForm from '../UserForm';

test('UserForm App componnet .', () => {
  const mockEditItem = {title:"a", body:"da"};
  const { getByText } = render(<UserForm editItem={mockEditItem} />);
  const linkElement = getByText(/Body :/i);
  expect(linkElement).toBeInTheDocument();
});
