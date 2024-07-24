import "./Header.scss";
function Header() {
  return (
    <div className="h-[40px] w-full pl-[10px] sm:h-[80px] flex items-center lg:shadow-md shadow-sm shadow-[#cccc]">
      <div className="h-full  flex items-center justify-center ">
        <img alt="header" src="http://dangkyhoc.vnu.edu.vn/Images/logo.png" />
      </div>
      <span className="text-[10px] sm:text-[18px] md:text-[25px] text-green_dark ">
        CỔNG THÔNG TIN ĐÀO TẠO ĐẠI HỌC VNU
      </span>
    </div>
  );
}

export default Header;
