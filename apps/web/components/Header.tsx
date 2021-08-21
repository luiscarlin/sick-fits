import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 4rem;
  background: red;
  transform: skew(-7deg);

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
const Header = () => {
  return (
    <header>
      <Logo>
        <Link href="/">Sick Fits</Link>
      </Logo>
      <p>Search</p>
      <Nav />
    </header>
  );
};

export default Header;
