import styled from 'styled-components';
import Header from './Header';

const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 32px;
`;

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default Page;
