import pix1 from "../assets/pics/logo-full.05ea951a9a5341c342027070e15fb071.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative z-50 h-16 w-full bg-white shadow-sm">
      <nav className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Home">
          <img src={pix1} alt="DigitalOcean" className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/Login"
            className="font-semibold text-slate-800 hover:text-blue-700"
          >
            Login
          </Link>
          <Link
            to="/Signup"
            className="rounded-full bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
