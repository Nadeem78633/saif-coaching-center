import { Header } from "../Components";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "60px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
