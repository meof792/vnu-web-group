import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUsers } from "@fortawesome/free-solid-svg-icons";
function Context() {
  return (
    <div className="  w-full mr-[30px]">
      <div className="lg:flex block">
        <span className="flex">
          <button className="md:h-[60px] h-[40px] p-[20px] border border-[#ccc] bg-green_400 text-[#fff] md:text-3xl text-[13px] mr-[30px] hover:scale-110 hover:bg-green_400/70 transition-all">
            Trang chủ VNU
          </button>
          <button className="md:h-[60px] h-[40px] p-[20px] border border-[#ccc] bg-green_400 text-[#fff] md:text-3xl text-[13px] mr-[30px] hover:scale-110 hover:bg-green_400/70 transition-all">
            về trang chủ DUCA
          </button>
        </span>
        <button className="md:h-[60px] h-[40px] p-[20px] border border-[#ccc] bg-green_400 text-[#fff] md:text-3xl text-[13px] lg:mr-[30px] lg:mt-0 mt-[20px]  hover:scale-110 hover:bg-green_400/70 transition-all">
          <FontAwesomeIcon className="mr-[10px]" icon={faUsers} />
          <span className="text-[red]">245 online</span>
        </button>
      </div>
      <div className="max-w-[850px] mt-[30px] bg-yellow_300 md:p-[20px] p-[12px]">
        <span className="sm:text-3xl text-xl">THỜI GIAN ĐĂNG KÍ HỌC</span>
        <li className="mt-2 sm:text-2xl text-[10px] flex items-center">
          <FontAwesomeIcon className="mx-[20px] text-[8px]" icon={faCircle} />
          Thời gian bắt đầu từ 10h30 , 24/08/2024 - Kết thúc tại 23h59,
          27/08/2024
        </li>
      </div>
      {/* Thông báo */}
      <nav>
        <ul className="mt-10 sm:text-4xl text-3xl text-[red]">Thông báo</ul>
        <ul className="mt-6 text-2xl">Sinh viên chú ý</ul>
        <ul className="mt-3">
          <li className="sm:text-2xl text-xl mb-3 flex items-center">
            <FontAwesomeIcon
              className="sm:mx-[20px] mr-[10px] text-[4px]"
              icon={faCircle}
            />
            Không dùng ứng dụng thứ 3 để hạn chế bị hộ mật khẩu
          </li>
          <li className="sm:text-2xl text-xl mb-3 flex items-center">
            <FontAwesomeIcon
              className="sm:mx-[20px] mr-[10px] text-[4px]"
              icon={faCircle}
            />
            Các bạn sinh viên lưu ý : Chỉ nên đăng nhập trước thời gian đăng ký
            từ 5 đến 10 phút
          </li>
          <li className="sm:text-2xl text-xl mb-3 flex items-center">
            <FontAwesomeIcon
              className="sm:mx-[20px] mr-[10px] text-[4px]"
              icon={faCircle}
            />
            Sinh viên chỉ được đăng nhập trong 30p sau 30p sẽ tự động out và
            phải chờ 2 tiếng mới được phép đăng nhập lại
          </li>
          <li className="sm:text-2xl text-xl mb-3 flex items-center">
            <FontAwesomeIcon
              className="sm:mx-[20px] mr-[10px] text-[4px]"
              icon={faCircle}
            />
            Hãy nhớ mã môn của môn học hay môn học chuyển điểm tương úng{" "}
          </li>

          <li className="sm:text-2xl text-xl mb-3 flex items-center">
            <FontAwesomeIcon
              className="sm:mx-[20px] mr-[10px] text-[4px]"
              icon={faCircle}
            />
            Hãy nhớ mã môn của môn học hay môn học chuyển điểm tương úng{" "}
          </li>
        </ul>
        <ul className="mt-10 sm:text-2xl text-xl">
          Link hỗ trợ riêng chỉ đăng ký học :
          <span className="text-green_400">
            https://www.facebook.com/supportdangkyhocvnu
          </span>
        </ul>
        <ul className="mt-10 sm:text-2xl text-xl">
          Cổng thông tin dành cho sinh viên đã tốt nghiệp :{" "}
          <span className="text-green_400">
            https://www.facebook.com/supportdangkyhocvnu
          </span>
        </ul>
      </nav>
    </div>
  );
}

export default Context;
