import Header from "../../component/Header";
import Footer from "../../component/Footer";
function DefaultLayout({ children }) {
  return (
    <div className="flex lg:h-[100vh] flex-col justify-between ">
      <Header />
      <div className="context">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
