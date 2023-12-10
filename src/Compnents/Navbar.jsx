import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <a className="btn btn-ghost text-2xl lg:text-5xl font-bold">
            Vinyl Vault
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-3xl">
          <Link to={"/vinyls"}>
            <li>
              <a>Vinyls</a>
            </li>
          </Link>
          <li></li>
          <Link to={"/about"}>
            <li>
              <a>About</a>
            </li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/cart"}>
          <div className="flex">
            <MdOutlineShoppingCart className="text-5xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
