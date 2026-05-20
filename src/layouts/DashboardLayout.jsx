import {
  NavLink,
  Outlet,
} from "react-router-dom";

import {
  FaCalendarCheck,
  FaUser,
  FaArrowLeft,
} from "react-icons/fa6";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const DashboardLayout = () => {

  const { user } =
  useContext(AuthContext);

  const navClass = ({ isActive }) =>
    isActive
      ? "bg-cyan-500 text-white"
      : "text-slate-600 hover:bg-slate-100";

  return (
    <section className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[320px_1fr]">

        {/* sidebar */}
        <aside className="bg-white border-r border-slate-200 p-6 lg:p-8 sticky top-0 h-screen">

          {/* logo */}
          <div>

            <h2 className="text-3xl font-black text-slate-900">
              DocAppoint
            </h2>

            <p className="text-slate-500 mt-2">
              Healthcare Dashboard
            </p>

          </div>

          {/* profile */}
          {/* profile */}
<div className="mt-10 bg-slate-50 border border-slate-200 rounded-[30px] p-5 text-center">

  <img
    src={
      user?.photoURL ||
      "https://i.ibb.co.com/2kR9QHL/user.png"
    }
    alt="user"
    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-cyan-500"
  />

  <h3 className="mt-5 text-2xl font-bold text-slate-900">

    {
      user?.displayName ||
      "Unknown User"
    }

  </h3>

  <p className="text-slate-500 mt-2 break-all">

    {
      user?.email
    }

  </p>

</div>

          {/* nav links */}
          <div className="mt-10 flex flex-col gap-4">

            <NavLink
              to="/dashboard/my-bookings"
              className={navClass}
            >

              <div className="flex items-center gap-3 px-5 py-4 rounded-2xl font-semibold">

                <FaCalendarCheck />

                My Bookings

              </div>

            </NavLink>

            <NavLink
              to="/dashboard/my-profile"
              className={navClass}
            >

              <div className="flex items-center gap-3 px-5 py-4 rounded-2xl font-semibold">

                <FaUser />

                My Profile

              </div>

            </NavLink>

          </div>

          {/* back button */}
          <NavLink
            to="/"
            className="mt-10 flex items-center gap-3 px-5 py-4 rounded-2xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 duration-300"
          >

            <FaArrowLeft />

            Back To Home

          </NavLink>

        </aside>

        {/* content */}
        <main className="p-5 lg:p-10">

          <Outlet />

        </main>

      </div>

    </section>
  );
};

export default DashboardLayout;