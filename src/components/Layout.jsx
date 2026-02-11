import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.scss";

function Layout() {
  return (
    <div className="layout">
      <Header />

      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
