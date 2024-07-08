import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";
function Layout({ children }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
