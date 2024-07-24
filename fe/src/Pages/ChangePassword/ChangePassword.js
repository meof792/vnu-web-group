import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Header from "../../components/component/Header";
import Footer from "../../components/component/Footer";

function ChangePassword() {
  const [typeCurrentPassword, setTypeCurrentPassword] = useState("password");
  const [typeNewPassword, setTypeNewPassword] = useState("password");
  const [typeRePassword, setTypeRePassword] = useState("password");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    re: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!currentPassword || !newPassword || !rePassword) {
      setError("Vui lòng điền đầy đủ thông tin");
      setShowPassword((prevState) => ({
        ...prevState,
        current: true,
        new: true,
        re: true,
      }));
      return;
    }
    if (newPassword !== rePassword) {
      setError("Mật khẩu xác nhận không đúng");
      setShowPassword((prevState) => ({
        ...prevState,
        new: false,
        current: false,
        re: true,
      }));
      return;
    }

    try {
      // Gọi API để đổi mật khẩu
      const response = await axios.post("/api/change-password", {
        currentPassword,
        newPassword,
      });
      // Xử lý phản hồi từ API (ví dụ: hiển thị thông báo thành công, chuyển hướng người dùng, ...)
      console.log(response.data);
    } catch (error) {
      // Xử lý lỗi (ví dụ: hiển thị thông báo lỗi)
      setError("Đã có lỗi xảy ra");
      console.error(error);
    }
  };

  return (
    <div className="wrapper w-full h-[100vh] flex flex-col justify-between items-center ">
      <Header />

      <div className="items-center max-h-[650px] w-full md:w-[700px] mt-20 md:m-0 border-2 border-[#ccc]">
        <div className="flex items-center pl-6 py-5 bg-green_400 text-white border-b-2 border-[#ccc]">
          <span className="sm:text-4xl text-2xl">Đổi Mật Khẩu</span>
        </div>
        <form onSubmit={handleSubmit} className="sm:px-6 mx-4 px-2 py-10">
          <label className="sm:text-3xl text-2xl">Mật Khẩu Hiện Tại</label>
          <div
            className={classNames(
              "relative border-[1px] p-3 mt-2 sm:h-[50px] h-[40px] flex items-center mb-10",
              { "border-red-500": showPassword.current }
            )}
          >
            <input
              className="sm:text-3xl text-2xl"
              autoFocus
              type={typeCurrentPassword}
              placeholder="Mật khẩu hiện tại"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <FontAwesomeIcon
              onMouseEnter={() => setTypeCurrentPassword("text")}
              onMouseLeave={() => setTypeCurrentPassword("password")}
              className="absolute right-5 sm:text-3xl text-2xl text-[#ccc] cursor-pointer hover:text-green-500"
              icon={faLock}
            />
            {showPassword.current && (
              <p className="absolute left-0 bottom-[-20px] text-red-500">
                {error}
              </p>
            )}
          </div>
          <label className="sm:text-3xl text-2xl">Mật Khẩu Thay Đổi</label>
          <div
            className={classNames(
              "relative border-[1px] p-3 mt-2 sm:h-[50px] h-[40px] flex items-center mb-10",
              { "border-red-500": showPassword.new }
            )}
          >
            <input
              className="sm:text-3xl text-2xl"
              type={typeNewPassword}
              placeholder="Mật khẩu khi thay đổi"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <FontAwesomeIcon
              onMouseEnter={() => setTypeNewPassword("text")}
              onMouseLeave={() => setTypeNewPassword("password")}
              className="absolute right-5 sm:text-3xl text-2xl text-[#ccc] cursor-pointer hover:text-green-500"
              icon={faLock}
            />
            {showPassword.new && (
              <p className="absolute left-0 bottom-[-20px] text-red-500">
                {error}
              </p>
            )}
          </div>
          <label className="sm:text-3xl text-2xl">Nhập Lại Mật Thay Đổi</label>
          <div
            className={classNames(
              "relative border-[1px] p-3 mt-2 sm:h-[50px] h-[40px] flex items-center mb-10",
              { "border-red-500": showPassword.re }
            )}
          >
            <input
              className="sm:text-3xl text-2xl"
              type={typeRePassword}
              placeholder="Mật khẩu nhập lại"
              onChange={(e) => setRePassword(e.target.value)}
            />
            <FontAwesomeIcon
              onMouseEnter={() => setTypeRePassword("text")}
              onMouseLeave={() => setTypeRePassword("password")}
              className="absolute right-5 sm:text-3xl text-2xl text-[#ccc] cursor-pointer hover:text-green-500"
              icon={faLock}
            />
            {showPassword.re && (
              <p className="absolute left-0 bottom-[-20px] text-red-500">
                {error}
              </p>
            )}
          </div>
          <div className="flex items-center justify-end">
            <Link to="/home">
              <button
                className="px-5 h-[40px] mr-5 bg-green_400 text-white text-2xl hover:bg-green_400/70 transition-all"
                type="button"
              >
                Trở về
              </button>
            </Link>
            <button
              className="px-5 h-[40px] bg-green_400 text-white text-2xl hover:bg-green_400/70 transition-all"
              type="submit"
            >
              Đổi Mật Khẩu
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ChangePassword;
