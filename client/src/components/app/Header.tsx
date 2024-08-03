import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          InteGreat
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/industries" className="hover:text-blue-600">
              Industries & Roles
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-600">
              IT Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
