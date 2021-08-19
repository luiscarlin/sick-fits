import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <Link href="/">Sick Fits</Link>
      <p>Search</p>
      <Nav />
    </header>
  );
};

export default Header;
