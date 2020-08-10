
import React from 'react';
import { render } from '@testing-library/react';
import UserItem from '../UserItem';
import MockProvider from '../../../config/mocks/MockProvider';
import { createBrowserHistory } from "history";
import { Router } from 'react-router-dom';
const webHistory = createBrowserHistory();

test('UserList App componnet .', () => {
  const UserItemComp = render(
    <MockProvider>
      <Router history={webHistory}>
        <UserItem user={{ id: 1, title: 'Post Title', body: 'Post Body' }} ></UserItem>
      </Router>
    </MockProvider>
  );
  expect(UserItemComp.container).toBeTruthy();
});