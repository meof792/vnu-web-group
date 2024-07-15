import classNames from "classnames";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Context from "./Context";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// add code
// add code

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [error, setError] = useState("");

  useEffect(() => {}, [acceptTerms]);
  const handleLogin = async (e) => {
    e.preventDefault();
    setShowPassword(false);
    setShowName(false);
    setError("");
    // Nếu tất cả điều kiện đều đúng, tiếp tục gửi yêu cầu đăng nhập
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        username: email,
        password: password,
      });

      if (response.data.success) {
        if (acceptTerms) {
          localStorage.setItem("username", email); // Lưu tên người dùng đã đăng nhập toàn cục
          alert("Đăng nhập thành công!");
        } else {
          alert("Bạn chưa xác nhận!");
        }
      } else {
        if (response.data.type === "tk") {
          setShowName(true);
          setShowPassword(false);
        } else {
          setShowName(false);
          setShowPassword(true);
      
      if(acceptTerms){
        if (response.data.success) {
            localStorage.setItem("username", email); // Lưu tên người dùng đã đăng nhập toàn cục
            alert("Đăng nhập thành công!");
        } else {
          if (response.data.type === "tk") {
            setShowName(true);
            setShowPassword(false);
          } else {
            setShowName(false);
            setShowPassword(true);
          }
          setError(response.data.msg);
        }
      }else{
        alert("Bạn chưa xác nhận!");
      }
    } catch (error) {
      console.error("Có lỗi xảy ra!", error);
    }
  };

  return (
    <div className="wrapper w-full block justify-between md:flex md:mt-0 py-[20px] px-[20px]">
      {/* content */}

      <Context />
      {/* login */}
      <div className="  items-center max-h-[450px]  md:w-[700px] mt-20 md:m-0 border-2 border-[#ccc]">
        <div className=" flex items-center pl-6 py-5 bg-green_400 text-white border-b-2 border-[#ccc] ">
          <span className="sm:text-4xl text-2xl ">Đăng Nhập</span>
        </div>
        <form className="px-6 py-10" onSubmit={handleLogin}>
          <label className="sm:text-3xl text-2xl">Tên truy cập</label>
          <div
            className={classNames(
              "relative border-[1px] p-3 mt-2 sm:h-[50px] h-[40px] flex items-center mb-10",
              { "border-red-500": showName }
            )}
          >
            <input
              className="sm:text-3xl text-2xl "
              type="text"
              placeholder="Mã sinh viên"
              autoFocus
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
            <input
              className="sm:text-3xl text-2xl"
              type={inputType}
              type="password"
              placeholder="Mật khẩu"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            />

            <FontAwesomeIcon
              onMouseEnter={() => setInputType("text")}
              onMouseLeave={() => setInputType("password")}
              className="absolute right-5 sm:text-3xl text-2xl text-[#ccc]"
              icon={faLock}
            />
            {showPassword && (
              <p className="absolute left-0 bottom-[-20px] text-red-500">
                {error}
              </p>
            )}
          </div>
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
      </div>
    </div>
  );
}

export default Login;
