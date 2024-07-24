import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import {
  faCaretRight,
  faDownload,
  faHouse,
  faLock,
  faRightFromBracket,
  faTable,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("home");
  const [showTK, setShowTK] = useState(false);

  const userName = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    const currentUrl = location.pathname;
    const urlSegments = currentUrl.split("/");
    const lastSegment = urlSegments[urlSegments.length - 1];

    setActiveItem(lastSegment);
    setShowStates(() => ({
      show: lastSegment === "1" || lastSegment === "2",
      show2: lastSegment === "print1" || lastSegment === "print2",
    }));
  }, [location]);
  const [showStates, setShowStates] = useState({
    show: false,
    show1: false,
    show2: false,
  });

  const logout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  const handleClick = (key) => {
    setShowStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="md:w-[230px] w-full bg-sidebar sm:text-2xl text-xl">
      <nav className="font-[550] text-[#2d2d2d]">
        <Link to={"/home"}>
          <ul
            className={classNames(
              "w-full sm:h-[70px] h-[40px] flex items-center px-5  border-[1px]",
              { "bg-click_sidebar text-green_400": activeItem === "home" }
            )}
          >
            <FontAwesomeIcon
              className=" mr-5 sm:text-3xl text-xl"
              icon={faHouse}
            />
            Trang chủ
          </ul>
        </Link>
        <Link to={"/table/1"}>
          <ul
            className={classNames(
              " transition-all duration-300 w-full  border-[1px]",
              {
                "bg-click_sidebar text-green_400":
                  activeItem === "1" || activeItem === "2",
              }
            )}
          >
            <li
              className={classNames(
                "sm:h-[70px] h-[40px] flex items-center px-5 "
              )}
              onClick={() => handleClick("show")}
            >
              <FontAwesomeIcon
                className=" mr-5 sm:text-3xl text-xl"
                icon={faTable}
              />
              Đăng kí môn học
            </li>
          </ul>
        </Link>
        {showStates.show && (
          <>
            <Link to={"/table/1"}>
              <li
                className={classNames(
                  "sm:h-[45px] h-[30px]  flex items-center pl-10 border-[1px] bg-[#d3d3d3] text-[#2d2d2d]",
                  {
                    "bg-click_sidebar text-green_400": activeItem === "1",
                  }
                )}
              >
                <FontAwesomeIcon
                  className=" mr-5 sm:text-3xl text-xl"
                  icon={faCaretRight}
                />
                Ngành 1
              </li>
            </Link>
            <Link to={"/table/2"}>
              <li
                className={classNames(
                  "sm:h-[45px] h-[30px]  flex items-center pl-10 border-[1px] bg-[#d3d3d3] text-[#2d2d2d]",
                  { "bg-click_sidebar text-green_400": activeItem === "2" }
                )}
              >
                <FontAwesomeIcon
                  className=" mr-5 sm:text-3xl text-xl"
                  icon={faCaretRight}
                />
                Ngành 2
              </li>
            </Link>
          </>
        )}

        <Link to={"/print/print1"}>
          <ul
            className={classNames(
              "transition-all duration-300 w-full  border-[1px]",
              {
                "bg-click_sidebar text-green_400":
                  activeItem === "print1" || activeItem === "print2",
              }
            )}
          >
            <li
              className="sm:h-[70px] h-[40px] flex items-center px-5"
              onClick={() => handleClick("show1")}
            >
              <FontAwesomeIcon
                className=" mr-5 sm:text-3xl text-xl"
                icon={faDownload}
              />
              In ra các môn đã đăng kí
            </li>
          </ul>
        </Link>
        {showStates.show2 && (
          <>
            <Link to={"/print/print1"}>
              <li
                className={classNames(
                  "sm:h-[45px] h-[30px]  flex items-center pl-10 border-[1px] bg-[#d3d3d3] text-[#2d2d2d]",
                  {
                    "bg-click_sidebar text-green_400": activeItem === "print1",
                  }
                )}
              >
                <FontAwesomeIcon
                  className=" mr-5 sm:text-3xl text-xl"
                  icon={faCaretRight}
                />
                In ra môn ngành 1
              </li>
            </Link>
            <Link to={"/print/print2"}>
              <li
                className={classNames(
                  "sm:h-[45px] h-[30px]  flex items-center pl-10 border-[1px] bg-[#d3d3d3] text-[#2d2d2d]",
                  {
                    "bg-click_sidebar text-green_400": activeItem === "print2",
                  }
                )}
              >
                <FontAwesomeIcon
                  className=" mr-5 sm:text-3xl text-xl"
                  icon={faCaretRight}
                />
                In ra môn ngành 2
              </li>
            </Link>
          </>
        )}
        <span
          onMouseEnter={() => setShowTK(true)}
          onMouseLeave={() => setShowTK(false)}
        >
          <ul className=" relative w-full flex flex-col items-center px-5 bg-green_400  py-3 text-white border-[1px]">
            <li className="py-1">MSV : {userName}</li>
            <FontAwesomeIcon
              className="absolute left-7 top-10 sm:text-3xl text-xl"
              icon={faUser}
            />
          </ul>

          {showTK && (
            <ul className="transition transition-all duration-300">
              <li
                onClick={() => logout()}
                className="bg-green_400 h-[40px] flex items-center pl-5  text-white border-[1px]"
              >
                <FontAwesomeIcon className="mr-4" icon={faRightFromBracket} />
                Đăng Xuất
              </li>
              <Link to={"/change-password"}>
                <li className="bg-green_400 h-[40px] flex items-center pl-5  text-white border-[1px]">
                  <FontAwesomeIcon className="mr-4" icon={faLock} /> Đổi mật
                  khẩu
                </li>
              </Link>
            </ul>
          )}
        </span>
      </nav>
    </div>
  );
}

export default Sidebar;
