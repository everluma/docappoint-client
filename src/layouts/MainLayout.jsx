import { Outlet } from "react-router-dom";

import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>

      <Navbar />

      <main className="min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;