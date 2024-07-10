import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";

function Layout({ children }) {
  return (
    <div className="min-h-[100vh] ">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
