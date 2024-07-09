import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";

function Layout({ children }) {
  return (
    <div>
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
