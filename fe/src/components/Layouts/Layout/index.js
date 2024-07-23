import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";
import { useNavigate } from "react-router-dom"; 
function Layout({ children }) {
  const navigate = useNavigate();
  navigate("/table/1");
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col">
        <div className="md:flex flex-1">
          <Sidebar />
          <div className="flex-1">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
