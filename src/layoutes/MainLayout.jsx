import { Outlet } from "react-router-dom";
import Navbar from "../sharedcomponents/Navbar";
import Footer from "../sharedcomponents/Footer";

const MainLayout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;