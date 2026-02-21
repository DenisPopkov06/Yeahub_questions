import Header from '../Header/Header';

type MainLayoutProps = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className='container'>{children}</main>
    </>
  );
};

export default MainLayout;