import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useMemo, useEffect } from "react";
import { registrationBoard } from "../../../redux/selector";
import { useDispatch } from "react-redux";
import { removeItem } from "../registrationBoard/registrationBoardSlice";
import { tc } from "./ReultBoardSlice";

function ResultBoard() {
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
  const data = useSelector(registrationBoard);

  const dispatch = useDispatch();
  const handleRemove = (index) => {
    dispatch(removeItem(index - dataUser.length));
  };

  // Sử dụng useMemo để tính toán tổng tín chỉ chỉ khi data thay đổi
  const dataUsersS = useMemo(() => [...dataUser, ...data], [dataUser, data]);
  // Tính toán tổng tín chỉ chỉ khi dataUsersS thay đổi
  const totalCredits = useMemo(() => {
    return dataUsersS.reduce((sum, item) => {
      const credits = parseInt(item.class, 10); // Chuyển đổi từ string thành số
      return sum + (isNaN(credits) ? 0 : credits);
    }, 0);
  }, [dataUsersS]);

  // Thay console.log bằng một useEffect để log totalCredits khi nó thay đổi
  useEffect(() => {
    dispatch(tc(totalCredits));
    console.log(totalCredits, "data chuyền đi");
  }, [totalCredits, dispatch]);

  return (
    <div className="max-h-[300px] overflow-y-auto overflow-x-auto sm:text-xl text-[10px] ">
      <table className="w-full border-[1px] min-w-[800px]">
        <thead>
          <tr className="bg-green_200">
            <th className=" border-[1px] p-5 text-white">STT</th>
            <th className=" border-[1px] p-5 text-white">Mã môn</th>
            <th className=" border-[1px] p-5 text-white">Tên Môn</th>
            <th className=" border-[1px] p-5 text-white">TC</th>
            <th className=" border-[1px] p-5 text-white">Tên giảng viên</th>
            <th className=" border-[1px] p-5 text-white">Học phí / Tín</th>
            <th className=" border-[1px] p-5 text-white">Lịch học</th>
            <th className=" border-[1px] p-5 text-white">Xóa</th>
          </tr>
        </thead>

        <tbody className="max-h-[300px] overflow-y-auto">
          {data &&
            dataUsersS.map((item, index) => (
              <tr key={index} className="h-[25px]">
                <td className="text-center  border-[1px]  h-full">
                  {index + 1}
                </td>
                <td className="text-center  border-[1px]  h-full">
                  {item.credit}
                </td>
                <td className="text-center  border-[1px]  h-full">
                  {item.subject}
                </td>
                <td className="text-center  border-[1px]  h-full">
                  {item.class}
                </td>
                <td className="text-center  border-[1px]  h-full">
                  {item.teacher}
                </td>

                <td className="text-center  border-[1px]  h-full">375.000</td>
                <td className="text-center  border-[1px]  h-full">
                  {item.late}
                </td>
                <td
                  onClick={() => handleRemove(index)}
                  className="text-center  border-[1px] bg-[#ff5b5b]  h-full hover:bg-[red]"
                >
                  <FontAwesomeIcon
                    className=" md:text-3xl sm:3xl text-2xl text-white "
                    icon={faXmark}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultBoard;
