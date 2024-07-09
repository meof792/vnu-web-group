import RegistrationBoard from "../../components/Layouts/Layout/registrationBoard";
import ResultBoard from "../../components/Layouts/Layout/resultBoard";
function Table() {
  return (
    <div>
      <div className="w-full p-10">
        <div>
          <div className="title bg-[#01b437] text-white text-center text-3xl py-5">
            ĐĂNG KÍ MÔN HỌC NGÀNH 1 : KỲ - NĂM HỌC : 2025 - 2026 | Số tín chỉ đã
            chọn [ <span className="text-[red] relative top-[1.5px]">0/40</span>{" "}
            ]
          </div>
          <div>
            <RegistrationBoard />
          </div>
        </div>
        <div className="mt-20">
          <div className="title bg-blue text-white text-center text-3xl py-5 ">
            DANH SÁCH MÔN HỌC ĐÃ CHỌN | Tổng số môn học đã chọn [
            <span className="text-[red] relative top-[1.5px] "> 7 </span>]
          </div>
          <div>
            <ResultBoard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
