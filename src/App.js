import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/useAuthListener';
import MainLoader from './loader/mainLoader';

const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/Signup'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
// const NotFound = lazy(() => import('./pages/not-found')); 

export default function App() {
  const { user, jwt } = useAuthListener();

  console.log(user, jwt);

  return (
    <>
      <Router>
        <Suspense fallback={<MainLoader />}>

          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login user={user} />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp user={user} />} />
            <Route path={ROUTES.DASHBOARD} element={<Dashboard user={user} />} />
            {/* <ProtectedRoute user={user} path={ROUTES.DASHBOARD}  >
                  <Dashboard />
                </ProtectedRoute> */}

            {/* <Dashboard /> */}
          </Routes>
        </Suspense>
      </Router>
    </>

  );
}