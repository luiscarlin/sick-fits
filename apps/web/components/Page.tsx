import Header from './Header';

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Page;
