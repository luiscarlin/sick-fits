import Header from './Header';

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Page;
