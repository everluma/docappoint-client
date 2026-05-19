import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen">

      <div className="flex">

        {/* sidebar */}
        <aside className="w-64 min-h-screen bg-slate-900 text-white p-5">
          <h2 className="text-2xl font-bold">
            Dashboard
          </h2>
        </aside>

        {/* content */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;
