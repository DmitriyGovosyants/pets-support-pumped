import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components';
import { routesPath, PrivateRoute, PublicRoute } from 'router';
import { GetCurrentUser } from 'redux/refreshToken';

const Home = lazy(() =>
  import('pages/HomePage/HomePage' /* webpackChunkName: "home-page" */)
);
const Register = lazy(() =>
  import(
    'pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */
  )
);
const Login = lazy(() =>
  import('pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */)
);
const News = lazy(() =>
  import('pages/NewsPage/NewsPage' /* webpackChunkName: "news-page" */)
);
const Notices = lazy(() =>
  import('pages/NoticesPage/NoticesPage' /* webpackChunkName: "notices-page" */)
);
const Friends = lazy(() =>
  import(
    'pages/OurFriendsPage/OurFriendsPage' /* webpackChunkName: "friends-page" */
  )
);
const User = lazy(() =>
  import('pages/UserPage/UserPage' /* webpackChunkName: "user-page" */)
);
const NoticesCategoriesList = lazy(() =>
  import('./components/notices/NoticesCategoriesList/NoticesCategoriesList')
);

export const App = () => {
  GetCurrentUser();

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route element={<PublicRoute />}>
          <Route index element={<Home />} />
        </Route>

        <Route path={routesPath.news} element={<News />} />
        <Route path={routesPath.notices} element={<Notices />}>
          <Route
            path={routesPath.cantegoryName}
            element={<NoticesCategoriesList />}
          />
        </Route>
        <Route path={routesPath.friends} element={<Friends />} />

        <Route element={<PrivateRoute redirectTo={routesPath.login} />}>
          <Route path={routesPath.user} element={<User />} />
        </Route>

        <Route
          element={<PublicRoute restricted redirectTo={routesPath.user} />}
        >
          <Route path={routesPath.login} element={<Login />} />
          <Route path={routesPath.register} element={<Register />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
