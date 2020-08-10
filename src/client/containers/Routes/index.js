import React, { Suspense, lazy } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import ENUMS from '../../config/ENUMS';

const UserForm = lazy(() => import('../user'));
const App = lazy(() => import('../App'));

function AppRoutes() {
  return (
    <div className='main-wrapper d-flex flex-column'>
      <div className='flex-fill'>
        <div className="content-wrapper">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path={ENUMS.ROUTES.HOME} component={App} />
              <Route exact path={`${ENUMS.ROUTES.EDIT}/:id`} component={UserForm} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default AppRoutes;