import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/thailistLogo.png" width={200} height={40} alt="logo" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>Abot</a>
      </Link>
      <Link href="/sentences">
        <a>Basics</a>
      </Link>
    </nav>
  );
};

export default Navbar;
