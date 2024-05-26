import { Header } from "../Components";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <main style={{ marginTop: "20px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
