import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { dataUser } from "../../../API/data";
import { handleCheckbox } from "./registrationBoardSlice";
import { reultBoard } from "../../../redux/selector";
import { registrationBoard } from "../../../redux/selector";

function RegistrationBoard() {
  // lấy dữ liệu từ API
  // Khởi tạo dữ liệu
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]); // Khởi tạo bằng mảng rỗng
  const [data4, setData4] = useState([]); // Khởi tạo bằng mảng rỗng

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/subject", {
          username: localStorage.getItem("username"),
        });
        setData1(response.data.subject1);
        setData2(response.data.subject2);
      } catch (error) {
        console.error("Có lỗi xảy ra!", error);
      }
    };

    fetchData();
  }, []);
  // console.log(data1.slice(0, 5));

  // thay đổi data theo ngành hoặc toàn trường
  const location = useLocation();
  // Cập nhật data3 và data4 khi data1 hoặc data2 thay đổi
  useEffect(() => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    setData3(lastPart === "nganhhoc" ? data2 : data1);
  }, [data1, data2, location]);

  // loại bỏ trùng
  useEffect(() => {
    const uniqueClasses = new Map();
    data3.forEach((item) => uniqueClasses.set(item.class, item));
    setData4(Array.from(uniqueClasses.values()));
  }, [data3]);
  console.log(data4 + " data4");
  console.log(data3 + " data3");
  console.log(data2 + " data2");
  console.log(data1 + " data1");

  // xử lí logic
  const dispatch = useDispatch();
  const datas = useSelector(registrationBoard);
  const reult = useSelector(reultBoard);
  console.log("số tín đã dăng kí " + reult);

  // State lưu các id của checkbox đã được chọn
  const [checkedIds, setCheckedIds] = useState([]);

  // cập nhập checkbox
  useEffect(() => {
    const dataUpdate = datas.map((item) => item.class.trim());
    if (checkedIds.length !== dataUpdate.length) {
      setCheckedIds(dataUpdate);
    }
  }, [datas, checkedIds]);

  // Hàm xử lý thay đổi checkbox
  const handleCheckboxChange = useCallback(
    (class_id) => {
      setCheckedIds((prevCheckedIds) => {
        const isChecked = prevCheckedIds.includes(class_id);
        const newCheckedIds = isChecked
          ? prevCheckedIds.filter((checkedId) => checkedId !== class_id)
          : [...prevCheckedIds, class_id];

        // Lấy danh sách các mục đã chọn
        const checkedData = data4.filter((item) =>
          newCheckedIds.includes(item.class.trim())
        );

        // Kiểm tra và dispatch hành động nếu cần thiết
        if (
          checkedData.length > 0 &&
          reult + +checkedData[checkedData.length - 1].credit < 30
        ) {
          dispatch(handleCheckbox(checkedData));
        } else {
          alert("Số môn đặt hơn 10. Vui lý những môn khác");
        }
        console.log(checkedData + " : dữ liệu chuyển đi");

        return newCheckedIds;
      });
    },
    [data4, dispatch, reult]
  );
  // Hàm kiểm tra xem id có trong datas không
  const isIdMatching = (id) => {
    return datas.some((ds) => ds.class.trim() === id);
  };
  // const isDuplicate = (id) => {
  //   return dataUser.some((item) => item.class.trim() === id);
  // };
  // console.log(checkedIds + " : dữ liệu chuyền đi");

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
            {data4.map((item, index) => (
              <tr
                key={index}
                className={classNames("h-[25px]", {
                  "bg-green_200 text-white": isIdMatching(item.class.trim()),
                  // ||
                  // isDuplicate(item.class.trim()),
                })}
              >
                <td className="relative text-center flex h-[25px] border-[1px]">
                  <input
                    className="z-10 w-full h-[100%] checkbox opacity-0"
                    type="checkbox"
                    disabled={
                      isIdMatching(item.class.trim())
                      // ||
                      // isDuplicate(item.class.trim())
                    }
                    checked={checkedIds.includes(item.class.trim())}
                    value={item.class.trim()}
                    onChange={() => handleCheckboxChange(item.class.trim())}
                  />
                  <div
                    className={classNames(
                      "absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center border-none",
                      {
                        "bg-green_200": isIdMatching(item.class.trim()),
                        //  ||
                        // isDuplicate(item.class.trim()),
                      }
                    )}
                  >
                    {" "}
                    {/* {isDuplicate(item.class.trim()) && (
                      <span className="font-bold text-[red] ">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-4xl text-white"
                        />
                      </span>
                    )} */}
                    {isIdMatching(item.class.trim()) ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-4xl text-white"
                      />
                    ) : null}
                  </div>
                </td>
                <td className="text-center border-[1px] h-full">
                  {item.class}
                </td>
                <td className="text-center border-[1px] h-full">{item.name}</td>
                <td className="text-center border-[1px] h-full">
                  {item.credit}
                </td>
                <td className="text-center border-[1px] h-full">
                  {item.lectures}
                </td>
                <td className="text-center border-[1px] h-full">
                  {item.total_student}
                </td>
                <td className="text-center border-[1px] h-full">
                  {item.student}
                </td>
                <td className="text-center border-[1px] h-full">375.000</td>
                <td className="text-center border-[1px] h-full">
                  {item.schedule}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RegistrationBoard;
