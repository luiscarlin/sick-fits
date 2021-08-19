import Link from 'next/link';

const Nav = () => {
  const navItems = [
    { url: '/products', title: 'Products' },
    { url: '/sell', title: 'Sell' },
    { url: '/orders', title: 'Orders' },
    { url: '/account', title: 'Account' },
  ];

  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.title}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
