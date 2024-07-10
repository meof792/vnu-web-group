import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegistrationBoard from "../../components/Layouts/Layout/registrationBoard";
import ResultBoard from "../../components/Layouts/Layout/resultBoard";
import { useState } from "react";
function Table() {
  const [show, setShow] = useState(false);
  const [specialized1, setSpecialized1] = useState(1);
  const [specialized2, setSpecialized2] = useState(2);
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
      <div className="w-full p-10">
        {/* table đang kí  */}
        <div>
          <div className="title bg-[#01b437] text-white flex items-center justify-center text-center text-2xl py-5">
            <div
              className="relative bg-[#ffffff] w-[100px] h-[30px] flex items-center justify-center text-center text-[#01b437] mr-10 rounded-md cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Ngành {specialized2}{" "}
              <FontAwesomeIcon className="ml-4 text-3xl" icon={faCaretDown} />
              {show && (
                <div
                  onClick={handleClick}
                  className="absolute bg-[#ffffff] bottom-[-31px] w-[100px] h-[30px] rounded-md border-[1px] flex items-center pl-4"
                >
                  Ngành {specialized1}
                </div>
              )}
            </div>
            ĐĂNG KÍ MÔN HỌC NGÀNH 1 : KỲ - NĂM HỌC : 2025 - 2026 | Số tín chỉ đã
            chọn [ <span className="text-[red] relative top-[1.5px]">0/40</span>
            ]
          </div>
          <div>
            <RegistrationBoard />
          </div>
        </div>
        {/* table kết quả đăng kí */}
        <div className="mt-20">
          <div className="title bg-blue text-white text-center text-3xl py-5 ">
            DANH SÁCH MÔN HỌC ĐÃ CHỌN | Tổng số môn học đã chọn [
            <span className="text-[red] relative top-[1.5px] "> 7 </span>]
          </div>
          <div>
            <ResultBoard />
          </div>
        </div>
        <div className="w-full flex justify-between mt-10 text-[#fff]">
          <button className="bg-[#ff00008c] px-5  border-[1px] py-6 text-2xl ">
            Bạn đã đăng kí [ 7 môn ] - [ 30 tín chỉ ]
          </button>
          <span className="flex">
            <button className="bg-green_400 px-5  border-[1px] py-6 ml-10 text-2xl ">
              Lưu môn học đăng kí{" "}
            </button>
            <button className="bg-[#2B4CA1] px-5  border-[1px] py-6 ml-10 text-2xl ">
              Xem và in
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Table;
