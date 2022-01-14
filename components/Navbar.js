import Link from 'next/link';

const navbarStyle = {
  margin: 10
};

const Navbar = () => {
  return (
    <nav style={{display: "flex", flexDirection: "row"}}>
      <Link href="/">
        <a style={navbarStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={navbarStyle}>About</a>
      </Link>
    </nav>
  )
};

export default Navbar;