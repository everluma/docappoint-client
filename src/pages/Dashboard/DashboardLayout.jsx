import React from 'react';

const DashboardLayout = () => {
    return (
        <div>
            
        </div>
    );
};

export default DashboardLayout;import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

        {/* sidebar */}
        <aside className="w-full lg:w-72 bg-white border-r border-slate-200 p-6">

          <h2 className="text-3xl font-black text-slate-900">
            Dashboard
          </h2>

          <div className="mt-8 flex flex-col gap-3">

            <NavLink
              to="/dashboard/my-bookings"
              className="px-5 py-3 rounded-2xl bg-cyan-500 text-white font-semibold"
            >
              My Bookings
            </NavLink>

            <NavLink
              to="/dashboard/my-profile"
              className="px-5 py-3 rounded-2xl bg-slate-900 text-white font-semibold"
            >
              My Profile
            </NavLink>

          </div>

        </aside>

        {/* content */}
        <main className="flex-1 overflow-hidden">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;