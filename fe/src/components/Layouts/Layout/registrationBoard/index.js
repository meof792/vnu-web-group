import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
function RegistrationBoard() {
  const [checkBox, setCheckBox] = useState(false);
  console.log(checkBox);

  return (
    <div className="h-[285px]  overflow-y-auto overflow-x-auto ">
      <table className="w-full min-w-[800px] border-[1px] sm:text-xl text-[10px] ">
        <thead>
          <tr>
            <th className="  border-[1px] p-5 text-[#000]">Chọn</th>
            <th className="  border-[1px] p-5 text-[#000]">Mã môn</th>
            <th className="  border-[1px] p-5 text-[#000]">Tên Môn</th>
            <th className="  border-[1px] p-5 text-[#000]">TC</th>
            <th className="  border-[1px] p-5 text-[#000]">Tên giảng viên</th>
            <th className="  border-[1px] p-5 text-[#000]">Tổng SV</th>
            <th className="  border-[1px] p-5 text-[#000]">Đã Đk</th>
            <th className="  border-[1px] p-5 text-[#000]">Học phí / Tín</th>
            <th className="  border-[1px] p-5 text-[#000]">Lịch học</th>
          </tr>
        </thead>

        <tbody className="max-h-[300px] overflow-y-auto">
          <tr className="h-[25px]">
            <td
              className="relative text-center flex
           h-[25px]"
            >
              <input
                className="z-10 w-full h-[100%] checkbox opacity-0 "
                type="checkbox"
                checked={checkBox}
                onChange={(e) => setCheckBox(e.target.checked)}
              />
              <div
                className={classNames(
                  "absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex items-center justify-center border-none",
                  {
                    "bg-green_200 ": checkBox,
                    "bg-white  ": !checkBox,
                  }
                )}
              >
                {checkBox ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-4xl text-white"
                  />
                ) : null}
              </div>
            </td>
            <td className="text-center  border-[1px]  h-full">MAT 5678</td>
            <td className="text-center  border-[1px]  h-full">
              Kinh tế chính trị mác lễ lin
            </td>
            <td className="text-center  border-[1px]  h-full">6</td>
            <td className="text-center  border-[1px]  h-full">
              Nguyễn Thế Công
            </td>
            <td className="text-center  border-[1px]  h-full">110</td>
            <td className="text-center  border-[1px]  h-full">110</td>
            <td className="text-center  border-[1px]  h-full">375.000</td>
            <td className="text-center  border-[1px]  h-full">
              T2 (6-7) -100T5, T3 (8-10) - 100-Y7
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RegistrationBoard;
