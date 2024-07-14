import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ResultBoard() {
  return (
    <div className="max-h-[300px] overflow-y-auto ">
      <table className="w-full border-[1px] ">
        <thead>
          <tr>
            <th className="text-xl bg-green_400 border-[1px] p-5 text-white">
              STT
            </th>
            <th className="text-xl bg-green_400 border-[1px] p-5 text-white">
              Mã môn
            </th>
            <th className="text-xl bg-green_400 border-[1px] p-5 text-white">
              Tên Môn
            </th>
            <th className="text-xl bg-green_400 border-[1px] p-5 text-white">
              TC
            </th>
            <th className="text-xl bg-green_400 border-[1px] p-5 text-white">
              Tên giảng viên
            </th>
            <th className="text-xl bg-green_400 border-[1px] p-5 text-white">
              Học phí / Tín
            </th>
            <th className="text-xl bg-green_400 border-[1px] p-5 text-white">
              Lịch học
            </th>
            <th className="text-xl bg-green_400 border-[1px] p-5 text-white">
              Hủy môn
            </th>
          </tr>
        </thead>

        <tbody className="max-h-[300px] overflow-y-auto">
          <tr className="h-[40px]">
            <td className="text-center text-xl border-[1px]  h-full">1</td>
            <td className="text-center text-xl border-[1px]  h-full">
              MAT 5678
            </td>
            <td className="text-center text-xl border-[1px]  h-full">
              Kinh tế chính trị mác lễ lin
            </td>
            <td className="text-center text-xl border-[1px]  h-full">6</td>
            <td className="text-center text-xl border-[1px]  h-full">
              Nguyễn Thế Công
            </td>

            <td className="text-center text-xl border-[1px]  h-full">
              375.000
            </td>
            <td className="text-center text-xl border-[1px]  h-full">
              T2 (6-7) -100T5, T3 (8-10) - 100-Y7
            </td>
            <td className="text-center text-xl border-[1px] bg-[red]  h-full hover:opacity-50">
              <FontAwesomeIcon
                className=" text-5xl text-white "
                icon={faXmark}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultBoard;
