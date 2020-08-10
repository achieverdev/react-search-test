import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from '../SearchInput';

test('3. SearchInput.js componnet .', () => {
  const { getByText } = render(<SearchInput />);
  const linkElement = getByText(/Search by title:/i);
  expect(linkElement).toBeInTheDocument();
});
