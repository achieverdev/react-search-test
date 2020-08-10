import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';
import MockProvider from '../../config/mocks/MockProvider';

test('Search App componnet .', () => {
  const searchApp = render(
    <MockProvider>
      <Search users={[{ id: 1, title: 'Post Title', body: 'Post Body' }]} />
    </MockProvider>
  );
  expect(searchApp.container).toBeTruthy();
});