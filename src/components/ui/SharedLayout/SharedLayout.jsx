import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routesPath } from 'router';
import { isRefreshing as refresh } from 'redux/authSlice';
import { Container, Header, Spinner, Footer } from 'components';
import { FooterPressWrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  const [isShow, setIsShow] = useState(true);
  const isRefreshing = useSelector(refresh);
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      pathname === '/' ||
      pathname === routesPath.login ||
      pathname === routesPath.register
    ) {
      setIsShow(false);
      return;
    }
    setIsShow(true);
  }, [pathname]);

  return (
    !isRefreshing && (
      <>
        <Container>
          <Header />
        </Container>
        <FooterPressWrapper>
          <main>
            <Suspense fallback={<Spinner />}>
              <Outlet />
            </Suspense>
          </main>
          {isShow && <Footer />}
        </FooterPressWrapper>
      </>
    )
  );
};
