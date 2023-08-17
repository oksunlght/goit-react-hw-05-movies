import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { Header, NavStyled, Loader } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <nav>
          <NavStyled to="/">Home</NavStyled>
          <NavStyled to="/movies">Movies</NavStyled>
        </nav>
      </Header>
      <main>
        {/* <Suspense fallback={<Loader>Loading...</Loader>}> */}
        <Suspense
          fallback={
            <Loader>
              <ThreeCircles
                height="100"
                width="100"
                color="orangered"
                visible={true}
              />
            </Loader>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
