import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

export default function Navbar() {
  return (
    <nav className="p-4 sticky top-0 z-10 bg-white">
      <div className=" flex w-full mx-auto sm:max-w-xl  md:max-w-2xl lg: max-w-3xl xl:max-w-6xl items-center justify-between border-b border-gray-200 pb-4 pt-2">
        {/* Left */}
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={36}
              height={36}
              className="w-6 h-6 md:w-9 md:h-9"
            />
            <p className="hidden md:block text-md font-medium tracking-wider">
              ECOMMERCE
            </p>
          </Link>
        </div>
        {/* Right */}
        <div className="flex items-center gap-6">
          <SearchBar />
          <Link href="/">
            <Home className="w-4 h-4 text-gray-600 " />
          </Link>
          <Bell className="w-4 h-4 text-gray-600 " />
          <ShoppingCartIcon />
          <Link href="/login">Signin</Link>
        </div>
      </div>
    </nav>
  );
}
