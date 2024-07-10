import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCaretRight,
  faDownload,
  faFilePdf,
  faFileWord,
  faHouse,
  faLock,
  faRightFromBracket,
  faTable,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sidebar() {
  const [showStates, setShowStates] = useState({
    show: false,
    show1: false,
    show2: false,
  });

  const handleClick = (key) => {
    setShowStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="w-[230px] h-full bg-[#f4f4f4]">
      <nav className="font-[550] text-[#494949]">
        <ul
          onClick={() => handleClick("show2")}
          className=" relative w-full flex flex-col items-center px-5 bg-green_400 text-2xl py-3 text-white border-[1px]"
        >
          <li className="py-1">Phạm Thế Phong </li>
          <li className="py-1">MSV : 20000577</li>
          <FontAwesomeIcon
            className="absolute left-7 top-10 text-3xl"
            icon={faUser}
          />
        </ul>
        {showStates.show2 && (
          <ul className="transition transition-all duration-300">
            <li className="bg-green_400 h-[40px] flex items-center pl-5 text-2xl text-white border-[1px]">
              <Link to={"/"}>
                {" "}
                <FontAwesomeIcon
                  className="mr-4"
                  icon={faRightFromBracket}
                />{" "}
                Đăng Xuất
              </Link>
            </li>
            <li className="bg-green_400 h-[40px] flex items-center pl-5 text-2xl text-white border-[1px]">
              <FontAwesomeIcon className="mr-4" icon={faLock} /> Đổi mật khẩu
            </li>
          </ul>
        )}

        <ul className="w-full h-[70px] flex items-center px-5 text-2xl border-[1px]">
          <FontAwesomeIcon
            className="text-[#838383] mr-5 text-3xl"
            icon={faHouse}
          />{" "}
          Trang chủ
        </ul>

        <ul className="transition transition-all duration-300 w-full text-2xl border-[1px]">
          <li
            className="h-[70px] flex items-center px-5 bg-[#f4f4f4]"
            onClick={() => handleClick("show")}
          >
            <FontAwesomeIcon
              className="text-[#838383] mr-5 text-3xl"
              icon={faTable}
            />{" "}
            Đăng kí môn học
          </li>
          {showStates.show && (
            <>
              <li className="h-[45px] flex items-center pl-10 border-[1px] bg-[#d3d3d3]">
                <FontAwesomeIcon
                  className="text-[#838383] mr-5 text-3xl"
                  icon={faCaretRight}
                />{" "}
                Ngành 1
              </li>
              <li className="h-[45px] flex items-center pl-10 border-[1px] bg-[#d3d3d3]">
                <FontAwesomeIcon
                  className="text-[#838383] mr-5 text-3xl"
                  icon={faCaretRight}
                />{" "}
                Ngành 2
              </li>
            </>
          )}
        </ul>

        <ul className=" transition-all duration-300 w-full text-2xl border-[1px]">
          <li
            className="h-[70px] flex items-center px-5"
            onClick={() => handleClick("show1")}
          >
            <FontAwesomeIcon
              className="text-[#838383] mr-5 text-3xl"
              icon={faDownload}
            />{" "}
            In ra các môn đã đăng kí
          </li>
          {showStates.show1 && (
            <>
              <li className="h-[45px] flex items-center pl-10 border-[1px] bg-[#d3d3d3]">
                <FontAwesomeIcon
                  className="text-[#838383] mr-5 text-3xl"
                  icon={faFileWord}
                />{" "}
                Xuất ra word
              </li>
              <li className="h-[45px] flex items-center pl-10 border-[1px] bg-[#d3d3d3]">
                <FontAwesomeIcon
                  className="text-[#838383] mr-5 text-3xl"
                  icon={faFilePdf}
                />{" "}
                Xuất ra PDF
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
