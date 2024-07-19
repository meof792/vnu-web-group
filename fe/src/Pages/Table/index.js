import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegistrationBoard from "./registrationBoard";
import ResultBoard from "./resultBoard";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { reultBoard } from "../../redux/selector";
import { dataUser } from "../../redux/selector";

function Table() {
  const [show, setShow] = useState(false);
  const [specialized1, setSpecialized1] = useState("Toàn trường");
  const [specialized2, setSpecialized2] = useState("Ngành học");
  const tc = useSelector(reultBoard);
  const [credits, setCredits] = useState(0);
  const dataUsers = useSelector(dataUser);
  useEffect(() => {
    setCredits(tc);
  });
  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  const handleClick = () => {
    // Khi click vào ngành 2, đổi vị trí với ngành 1
    const temp = specialized1;
    setSpecialized1(specialized2);
    setSpecialized2(temp);
  };
  return (
    <div>
      <div className="w-full sm:p-10 sm:text-2xl text-[10px]">
        {/* table đang kí  */}
        <div>
          <div className="title bg-green_200 text-white sm:flex items-center justify-center text-center py-5 sm:px-0 px-2 ">
            <div
              className="relative bg-[#ffffff] sm:w-[200px] w-full h-[30px] flex items-center justify-center text-center text-[#01b437] mr-10 rounded-md cursor-pointer z-10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Ngành {specialized1}{" "}
              <FontAwesomeIcon className="ml-4 text-3xl" icon={faCaretDown} />
              {show && (
                <div
                  onClick={handleClick}
                  className="absolute bg-[#ffffff] bottom-[-31px] sm:w-[200px] w-full h-[30px] rounded-md border-[1px] flex items-center sm:pl-10"
                >
                  Ngành {specialized2}
                </div>
              )}
            </div>
            <span>
              ĐĂNG KÍ MÔN HỌC NGÀNH 1 : KỲ - NĂM HỌC : 2025 - 2026 | Số tín chỉ
              đã chọn [{" "}
              <span className="text-[red] relative top-[1.5px]">
                {credits}/10
              </span>
              ]
            </span>
          </div>
          <div>
            <RegistrationBoard />
          </div>
        </div>
        {/* table kết quả đăng kí */}
        <div className="mt-20">
          <div className="title bg-blue text-white text-center  py-5 ">
            DANH SÁCH MÔN HỌC ĐÃ CHỌN | Tổng số môn học đã chọn [
            <span className="text-[red] relative top-[1.5px] "> 7 </span>]
          </div>
          <div>
            <ResultBoard />
          </div>
        </div>
        <div className="w-full  sm:flex justify-between mt-10 text-[#fff]">
          <span className="flex sm:mb-0 mb-10">
            <button className="bg-green_400 px-5 border-[1px] py-3  hover:bg-[red] ">
              Lưu môn học đăng kí{" "}
            </button>
            <button className="bg-[#2B4CA1] px-5  border-[1px] py-3 ml-10 hover:opacity-50 ">
              Xem và in
            </button>
          </span>
          <button className="bg-[#ff00008c] px-5 w-full sm:max-w-[320px] border-[1px] py-3 ">
            Bạn đã đăng kí [ 7 môn ] - [ 23 / 30 tín chỉ ]
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
