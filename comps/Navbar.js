import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={200} height={40} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/sentences">
        <a>Basics</a>
      </Link>
    </nav>
  );
};

export default Navbar;
