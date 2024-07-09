import React from "react";
import "./Login.scss";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faLock,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// add code
// add code

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showName, setShowName] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {}, [acceptTerms]);
  const handleLogin = async (e) => {
    e.preventDefault();
    setShowPassword(false);
    setShowName(false);
    setError("");
    // Kiểm tra các điều kiện trước khi gửi yêu cầu đăng nhập
    if (email === "") {
      setShowName(true);
      setError("Vui lòng nhập tài khoản");
      return;
    } else if (email.length !== 8 || !/^\d+$/.test(email)) {
      setShowName(true);
      setError("Vui lòng nhập mã sinh viên VNU");
      return;
    } else if (password === "") {
      setShowPassword(true);
      setError("Vui lòng nhập mật khẩu");
      return;
    } else if (password.length < 9) {
      setShowPassword(true);
      setError("Mật khẩu của bạn không đúng");
      return;
    } else if (!acceptTerms) {
      alert("Vui lòng Click để xác nhận bạn là sinh viên VNU");
      return;
    }

    // Nếu tất cả điều kiện đều đúng, tiếp tục gửi yêu cầu đăng nhập
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        username: email,
        password: password,
      });

      if (response.data.success) {
        localStorage.setItem("username", email); // Lưu tên người dùng đã đăng nhập toàn cục
        alert("Đăng nhập thành công!");
      } else {
        alert("Đăng nhập thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Có lỗi xảy ra!", error);
    }
  };

  return (
    <div className="wrapper w-full block justify-between md:flex md:mt-0 py-[20px] px-[20px]">
      {/* content */}

      <div className="  w-full mr-[30px]">
        <div className="flex">
          <button className="md:h-[60px] h-[40px] p-[20px] border border-[#ccc] bg-green_400 text-[#fff] md:text-3xl text-[13px] mr-[30px] hover:scale-110 hover:bg-green_400/70 transition-all">
            Trang chủ VNU
          </button>
          <button className="md:h-[60px] h-[40px] p-[20px] border border-[#ccc] bg-green_400 text-[#fff] md:text-3xl text-[13px]  mr-[30px]  hover:scale-110 hover:bg-green_400/70 transition-all">
            về trang chủ DUCA
          </button>
          <button className="md:h-[60px] h-[40px] hidden sm:block p-[20px] border border-[#ccc] bg-green_400 text-[#fff] md:text-3xl text-[13px]  hover:scale-110 hover:bg-green_400/70 transition-all">
            <FontAwesomeIcon className="mr-[10px]" icon={faUsers} />
            <span className="text-[red]"> 320 online</span>
          </button>
        </div>
        <button className="md:h-[60px] h-[40px] sm:hidden flex items-center mt-4 p-[20px] border border-[#ccc] bg-green_400 text-[#fff] md:text-3xl text-[13px]  hover:scale-110 hover:bg-green_400/70 transition-all ">
          <FontAwesomeIcon className="mr-[10px]" icon={faUsers} />
          <span className="text-[red]"> 320 online</span>
        </button>

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
              Các bạn sinh viên lưu ý : Chỉ nên đăng nhập trước thời gian đăng
              ký từ 5 đến 10 phút
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
      {/* login */}
      <div className="  items-center max-h-[450px]  md:w-[700px] mt-20 md:m-0 border-2 border-[#ccc]">
        <div className=" flex items-center pl-6 py-5 bg-green_400 text-white border-b-2 border-[#ccc] ">
          <span className="sm:text-4xl text-2xl ">Đăng Nhập</span>
        </div>
        {/* form đăng nhập */}
        <form className="px-6 py-10" onSubmit={handleLogin}>
          <label className="sm:text-3xl text-2xl">Tên truy cập</label>
          <div
            className={classNames(
              "relative border-[1px] p-3 mt-2 sm:h-[50px] h-[40px] flex items-center mb-10",
              { "border-red-500": showName }
            )}
          >
            {/* input tên mã sinh viên */}
            <input
              className="sm:text-3xl text-2xl "
              type="text"
              placeholder="Mã sinh viên"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FontAwesomeIcon
              className="absolute right-5 sm:text-3xl text-2xl text-[#ccc]"
              icon={faUser}
            />
            {showName && (
              <p className="absolute left-0 bottom-[-20px] text-red-500">
                {error}
              </p>
            )}
          </div>
          <label className="sm:text-3xl text-2xl">Mật Khẩu</label>
          <div
            className={classNames(
              "relative border-[1px] p-3 mt-2 sm:h-[50px] h-[40px] flex items-center mb-10",
              { "border-red-500": showPassword }
            )}
          >
            {/* input mật khẩu */}
            <input
              className="sm:text-3xl text-2xl"
              type="password"
              placeholder="Mật khẩu"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              className="absolute right-5 sm:text-3xl text-2xl text-[#ccc]"
              icon={faLock}
            />
            {showPassword && (
              <p className="absolute left-0 bottom-[-20px] text-red-500">
                {error}
              </p>
            )}
          </div>
          {/* quên mật khẩu và nút đăng nhập */}
          <div className="flex items-center justify-between">
            <span className="sm:text-2xl text-xl text-green_400">
              Quên mật khẩu ?
            </span>{" "}
            <button
              className="w-[100px] h-[40px] bg-green_400 text-white text-2xl hover:scale-110 hover:bg-green_400/70 transition-all"
              type="submit"
            >
              Đăng Nhập
            </button>
          </div>
          {/* click để xác nhận không phải ng máy */}
          <div className="bg-[#F5F5F5] p-5 mt-10 flex items-center">
            <input
              className="border-2 w-[20px] h-[20px] bg-white text-[#ccc] mr-8 "
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
            <label className="sm:text-2xl text-xl">
              Hãy chọn để xác nhận bạn là sinh viên VNU
            </label>
          </div>
        </form>
        {/* kết thúc form đăng nhập */}
      </div>
    </div>
  );
}

export default Login;
