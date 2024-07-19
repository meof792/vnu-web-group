import { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { handleCheckbox } from "./registrationBoardSlice";
import { reultBoard } from "../../../redux/selector";
import { registrationBoard } from "../../../redux/selector";

// import { reultBoard } from "../../../redux/selector";

function RegistrationBoard() {
  const dispatch = useDispatch();
  const datas = useSelector(registrationBoard);
  const result = useSelector(reultBoard);
  const [dataTmp, setDataTmp] = useState([]);

  const data = [
    {
      id: 1,
      subject: "Tin học đại cương",
      credit: "MAT 2345",
      class: "2",
      teacher: "Nguyễn Thế Công",
      student: "110",
      attend: "110",
      money: "375.000",
      late: "T2 (6-7) -100T5, T3 (8-10) - 100-Y7",
    },
    {
      id: 2,
      subject: "Lập trình C++",
      credit: "CSE 1234",
      class: "1",
      teacher: "Phạm Văn A",
      student: "90",
      attend: "85",
      money: "400.000",
      late: "T4 (3-5) - 101T3, T6 (6-8) - 202A2",
    },
    {
      id: 3,
      subject: "Cấu trúc dữ liệu",
      credit: "CSE 2345",
      class: "3",
      teacher: "Lê Thị B",
      student: "80",
      attend: "78",
      money: "350.000",
      late: "T3 (1-2) - 103A3, T5 (4-6) - 203B1",
    },
    {
      id: 4,
      subject: "Toán rời rạc",
      credit: "MAT 3456",
      class: "2",
      teacher: "Trần Văn C",
      student: "100",
      attend: "95",
      money: "380.000",
      late: "T2 (5-6) - 104B2, T4 (7-9) - 204C2",
    },
    {
      id: 5,
      subject: "Lý thuyết đồ thị",
      credit: "CSE 4567",
      class: "1",
      teacher: "Nguyễn Văn D",
      student: "70",
      attend: "65",
      money: "360.000",
      late: "T5 (2-3) - 105D1, T6 (4-5) - 205E3",
    },
    {
      id: 6,
      subject: "Kỹ thuật lập trình",
      credit: "CSE 5678",
      class: "2",
      teacher: "Vũ Thị E",
      student: "85",
      attend: "82",
      money: "390.000",
      late: "T3 (6-7) - 106E2, T5 (8-10) - 206F2",
    },
    {
      id: 7,
      subject: "Quản lý dự án",
      credit: "BUS 6789",
      class: "1",
      teacher: "Phan Văn F",
      student: "75",
      attend: "72",
      money: "370.000",
      late: "T4 (1-2) - 107F1, T6 (3-5) - 207G1",
    },
    {
      id: 8,
      subject: "Cơ sở dữ liệu",
      credit: "CSE 7890",
      class: "3",
      teacher: "Lê Thị G",
      student: "95",
      attend: "90",
      money: "400.000",
      late: "T2 (4-5) - 108G3, T4 (6-7) - 208H2",
    },
    {
      id: 9,
      subject: "Lập trình web",
      credit: "CSE 8901",
      class: "2",
      teacher: "Ngô Văn H",
      student: "88",
      attend: "84",
      money: "385.000",
      late: "T5 (1-2) - 109H1, T6 (2-3) - 209I3",
    },
    {
      id: 10,
      subject: "Mạng máy tính",
      credit: "CSE 9012",
      class: "1",
      teacher: "Trần Thị I",
      student: "65",
      attend: "60",
      money: "350.000",
      late: "T3 (5-6) - 110I2, T5 (7-9) - 210J1",
    },
  ];

  const dataUser = [
    {
      id: 1,
      subject: "Tin học đại cương",
      credit: "MAT 2345",
      class: "2",
      teacher: "Nguyễn Thế Công",
      student: "110",
      attend: "110",
      money: "375.000",
      late: "T2 (6-7) -100T5, T3 (8-10) - 100-Y7",
    },
    {
      id: 2,
      subject: "Lập trình C++",
      credit: "CSE 1234",
      class: "1",
      teacher: "Phạm Văn A",
      student: "90",
      attend: "85",
      money: "400.000",
      late: "T4 (3-5) - 101T3, T6 (6-8) - 202A2",
    },
  ];

  // State lưu các id của checkbox đã được chọn
  const [checkedIds, setCheckedIds] = useState([]);

  // Effect để đồng bộ hóa checkedIds với datas khi datas thay đổi
  const filteredCheckedIds = useMemo(() => {
    const idsFromDatas = datas.map((item) => item.id);
    return checkedIds.filter((id) => idsFromDatas.includes(id));
  }, [datas, checkedIds]);
  useEffect(() => {
    if (checkedIds.length !== filteredCheckedIds.length) {
      setCheckedIds(filteredCheckedIds);
    }
  }, [filteredCheckedIds, checkedIds]);

  // Hàm xử lý thay đổi checkbox
  const handleCheckboxChange = useCallback(
    (id) => {
      setCheckedIds((prevCheckedIds) => {
        const isChecked = prevCheckedIds.includes(id);
        const newCheckedIds = isChecked
          ? prevCheckedIds.filter((checkedId) => checkedId !== id)
          : [...prevCheckedIds, id];

        // Dispatch action khi cần thiết
        const checkedData = data.filter((item) =>
          newCheckedIds.includes(item.id)
        );

        const checkbox_End = checkedData[checkedData.length - 1].class;
        const checkTC = checkedData.length > 0 && result + +checkbox_End < 11;
        if (checkTC) {
          dispatch(handleCheckbox(checkedData));
          console.log(checkedData);
        } else {
          alert("bạn đã đang kí quá số môn quy định");
        }

        return newCheckedIds;
      });
    },
    [result]
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
                    disabled={isDuplicate(item.id)}
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
