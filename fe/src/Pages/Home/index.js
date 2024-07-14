function Home() {
  return (
    <div className="w-full sm:text-3xl text-xl ">
      <div className="w-full text-center sm:text-4xl text-2xl text-white sm:py-8 py-4 bg-green_400 ">
        THÔNG BÁO VÀ HƯỚNG DẪN SINH VIÊN
      </div>
      <div className="sm:p-10 p-5">
        <span>TRƯỜNG ĐẠI HỌC QUỐC GIA HÀ NỘI - VNU - THÔNG BÁO</span>
        <nav className="w-full sm:ml-10 mx-3 ">
          <ul className="mt-8">
            <li className=" mt-3 text-[red] ">
              Các lưu ý trong quá trình đăng kí học phần năm 2024
            </li>
            <li className=" mt-3 mx-3">
              1 . Thời gian của các bạn đăng nhập sẽ là 30 phút sau đó sẽ tự
              động out
            </li>
            <li className=" mt-3 mx-3">
              2 . Hãy chọn đúng mã ngành môn học của bạn vì sẽ có những môn
              không thể chuyển đổi điểm từ ngành này qua ngành khác
            </li>
            <li className=" mt-3 mx-3">
              3 . Hãy chú ý không dùng thiết bị thứ 3 khi đăng nhập để tránh lộ
              thông tin, đây là hành vi nhà trường nghiêm cấm nếu phát hiện sẽ
              bị xử lí
            </li>
            <li className=" mt-3 mx-3">
              4 . Số tín chỉ bạn được đăng kí tối đa là 40 tín
            </li>
            <li className=" mt-3 mx-3">
              5 . Nghiêm cấm các hành vi bán học phần trên mọi hình thức nếu
              phát hiện sẽ bị xử lí nghiêm thiện trí đình chỉ học
            </li>
          </ul>
          <ul className="mt-8">
            <li className=" mt-3 text-[red]">Các cổng thông tin cần thiết</li>
            <li className=" mt-3 mx-3">1 . Video hướng dẫn đăng kí học phần</li>
            <li className=" mt-3 mx-3">
              2 . Cống thông tin dành cho sinh viên đã tốt nghiệp
            </li>
            <li className=" mt-3 mx-3">
              3 . Trang web hướng dẫn sinh viên hoàn thành những thủ túc cần
              thiết
            </li>
          </ul>{" "}
          <ul className="mt-8">
            <li className=" mt-3 text-[red]">Cập nhập dữ liệu</li>
            <li className=" mt-3 mx-3">
              1 . Dữ liệu sinh viên được cập nhập từ ngày 13/06/2024
            </li>
            <li className=" mt-3 mx-3">
              2 . Thời gian cập nhập có thể chậm hơn 1- 2 ngày so với dự kiến
              nên mọi người không cần nóng vội
            </li>
            <li className=" mt-3 mx-3">
              3 . Danh sách sinh viên bị đình chỉ hay quyết định kĩ luật
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
