import { useContext, useState } from "react";

import {
  NavLink,
  Link,
} from "react-router-dom";

import { AuthContext } from "../../providers/AuthProvider";

import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { toast } from "react-hot-toast";






const Navbar = () => {

  const { user, logoutUser } =
    useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const handleLogout =
  async () => {

    try {

      await logoutUser();

      toast.success(
        "Logout successful!"
      );

    } catch (err) {

      toast.error(err.message);
    }
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-cyan-500 font-semibold"
      : "text-slate-700";

  const links = (
    <>

      <NavLink
        to="/"
        className={navLinkClass}
      >
        Home
      </NavLink>

      <NavLink
        to="/appointments"
        className={navLinkClass}
      >
        All Appointments
      </NavLink>

      <NavLink
        to="/dashboard/my-bookings"
        className={navLinkClass}
      >
        Dashboard
      </NavLink>

    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">

      <nav className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">

        {/* logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >

          <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-white font-bold text-xl">
            D
          </div>

          <h2 className="text-2xl font-bold text-slate-800">
            DocAppoint
          </h2>

        </Link>

        {/* desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-[17px]">

          {links}

        </div>

        {/* auth buttons */}
        <div className="hidden md:flex items-center gap-4">

          {
  user ? (

    <div className="relative group">

      <img
        src={
          user?.photoURL ||
          "https://i.ibb.co/4pDNDk1/avatar.png"
        }
        alt="user"
        className="w-11 h-11 rounded-full object-cover border-2 border-cyan-500 cursor-pointer"
      />

      {/* dropdown */}
      <div className="absolute right-0 top-14 w-64 bg-white rounded-3xl shadow-2xl border border-slate-100 p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 z-50">

        <div className="pb-4 border-b border-slate-200">

          <h3 className="font-bold text-slate-900">
            {user?.displayName || "User"}
          </h3>

          <p className="text-sm text-slate-500 mt-1 break-all">
            {user?.email}
          </p>

        </div>

        <div className="mt-4 flex flex-col gap-3">

          <Link
            to="/dashboard/my-profile"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-100 duration-300"
          >

            <FaUserCircle />

            My Profile

          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-red-50 hover:text-red-500 duration-300 text-left"
          >

            <FaSignOutAlt />

            Logout

           </button>

           </div>

           </div>

            </div>

             ) : (
              <>

                <Link
                  to="/login"
                  className="px-5 py-2 rounded-xl border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white duration-300"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-5 py-2 rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 duration-300"
                >
                  Register
                </Link>

              </>
            )
          }

        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {
            open
              ? <FaTimes />
              : <FaBars />
          }
        </button>

      </nav>

      {/* mobile menu */}
      {
        open && (
          <div className="md:hidden bg-white border-t border-slate-200 px-5 py-5 flex flex-col gap-5 text-lg">

            {links}

            <div className="flex flex-col gap-3">

              {
                user ? (
                  <button
                    onClick={handleLogout}
                    className="px-5 py-3 rounded-xl bg-slate-900 text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="px-5 py-3 rounded-xl border border-cyan-500 text-center"
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      className="px-5 py-3 rounded-xl bg-cyan-500 text-white text-center"
                    >
                      Register
                    </Link>
                  </>
                )
              }

            </div>

          </div>
        )
      }

    </header>
  );
};

export default Navbar;