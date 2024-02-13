import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import Header from 'components/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      </main>
    </>
  );
};

export default Layout;
