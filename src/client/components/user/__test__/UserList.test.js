import React from 'react';
import { render } from '@testing-library/react';
import UserList from '../UserList';
import MockProvider from '../../../config/mocks/MockProvider';

test('UserList App componnet .', () => {
  const List = render(
    <MockProvider>
      <UserList users={{ id: 1, title: 'Post Title', body: 'Post Body' }} />
    </MockProvider>
  );
  expect(List.container).toBeTruthy();
});