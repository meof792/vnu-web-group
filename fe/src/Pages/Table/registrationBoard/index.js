import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { handleCheckbox } from "./registrationBoardSlice";
import { reultBoard } from "../../../redux/selector";
import { registrationBoard } from "../../../redux/selector";
import { data } from "../../../API/data";
import { dataUser } from "../../../API/data";

function RegistrationBoard() {
  const dispatch = useDispatch();
  const datas = useSelector(registrationBoard);
  const reult = useSelector(reultBoard);

  // State lưu các id của checkbox đã được chọn
  const [checkedIds, setCheckedIds] = useState([]);

  // cập nhập checkbox
  useEffect(() => {
    const dataUpdate = datas.map((item) => item.id);
    if (checkedIds.length !== dataUpdate.length) {
      setCheckedIds(dataUpdate);
    }
  }, [datas, checkedIds]);

  // Hàm xử lý thay đổi checkbox
  const handleCheckboxChange = useCallback(
    (id) => {
      setCheckedIds((prevCheckedIds) => {
        const isChecked = prevCheckedIds.includes(id);
        const newCheckedIds = isChecked
          ? prevCheckedIds.filter((checkedId) => checkedId !== id)
          : [...prevCheckedIds, id];

        // Lấy danh sách các mục đã chọn
        const checkedData = data.filter((item) =>
          newCheckedIds.includes(item.id)
        );

        // Kiểm tra và dispatch hành động nếu cần thiết
        if (
          checkedData.length > 0 &&
          reult + +checkedData[checkedData.length - 1].class < 11
        ) {
          dispatch(handleCheckbox(checkedData));
        } else {
          alert("quá khố tín quy định");
        }

        return newCheckedIds;
      });
    },
    [data, dispatch, reult]
  );
  // Hàm kiểm tra xem id có trong datas không
  const isIdMatching = (id) => {
    return datas.some((ds) => ds.id === id);
  };
  const isDuplicate = (id) => {
    return dataUser.some((item) => item.id === id);
  };

  return (
    <>
      <div className="h-[285px] overflow-y-auto overflow-x-auto">
        <table className="w-full min-w-[800px] border-[1px] sm:text-xl text-[10px]">
          <thead>
            <tr>
              <th className="border-[1px] p-5 text-[#000]">Chọn</th>
              <th className="border-[1px] p-5 text-[#000]">Mã môn</th>
              <th className="border-[1px] p-5 text-[#000]">Tên Môn</th>
              <th className="border-[1px] p-5 text-[#000]">TC</th>
              <th className="border-[1px] p-5 text-[#000]">Tên giảng viên</th>
              <th className="border-[1px] p-5 text-[#000]">Tổng SV</th>
              <th className="border-[1px] p-5 text-[#000]">Đã Đk</th>
              <th className="border-[1px] p-5 text-[#000]">Học phí / Tín</th>
              <th className="border-[1px] p-5 text-[#000]">Lịch học</th>
            </tr>
          </thead>

          <tbody className="max-h-[300px] overflow-y-auto">
            {data.map((item) => (
              <tr
                key={item.id}
                className={classNames("h-[25px]", {
                  "bg-green_200 text-white":
                    isIdMatching(item.id) || isDuplicate(item.id),
                })}
              >
                <td className="relative text-center flex h-[25px] border-[1px]">
                  <input
                    className="z-10 w-full h-[100%] checkbox opacity-0"
                    type="checkbox"
                    disabled={isIdMatching(item.id) || isDuplicate(item.id)}
                    checked={checkedIds.includes(item.id)}
                    value={item.id}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <div
                    className={classNames(
                      "absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center border-none",
                      {
                        "bg-green_200":
                          isIdMatching(item.id) || isDuplicate(item.id),
                      }
                    )}
                  >
                    {" "}
                    {isDuplicate(item.id) && (
                      <span className="font-bold text-[red] ">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-4xl text-white"
                        />
                      </span>
                    )}
                    {isIdMatching(item.id) ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-4xl text-white"
                      />
                    ) : null}
                  </div>
                </td>
                <td className="text-center border-[1px] h-full">
                  {item.credit}
                </td>
                <td className="text-center border-[1px] h-full">
                  {item.subject}
                </td>
                <td className="text-center border-[1px] h-full">
                  {item.class}
                </td>
                <td className="text-center border-[1px] h-full">
                  {item.teacher}
                </td>
                <td className="text-center border-[1px] h-full">110</td>
                <td className="text-center border-[1px] h-full">110</td>
                <td className="text-center border-[1px] h-full">375.000</td>
                <td className="text-center border-[1px] h-full">{item.late}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RegistrationBoard;
