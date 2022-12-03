import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isRefreshing as refresh } from 'redux/authSlice';
import { Container, Header, Spinner, Footer } from 'components';
import { FooterPressWrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  const isRefreshing = useSelector(refresh);

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
          <Footer />
        </FooterPressWrapper>
      </>
    )
  );
};
