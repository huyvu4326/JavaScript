function nhapThongTin() {
  try {
    let ten = prompt("Nhập tên: ");
    if (!ten.trim()) {
      console.log("Tên không được bỏ trống.");
    }
    let tuoi = prompt("Nhập tuổi: ");
    if (isNaN(tuoi)) {
      console.log("Tuổi phải là số.");
    }
    let email = prompt("Nhập email: ");
    if (!email.includes("@") || !email.includes(".")) {
      console.log("Email phải có kí tự @ và dấu chấm.");
    }
    let soDienThoai = prompt("Nhập số điện thoại: ");
    if (!soDienThoai.startsWith("0")) {
      console.log("Số điện thoại phải bắt đầu bằng 0.");
    }
    console.log("Thông tin nhập vào hợp lệ.");
    // console.log(ten, tuoi, email, soDienThoai);
  } catch (error) {
    console.error("Lỗi:", error.message);
  }
}
// Gọi hàm nhập thông tin
nhapThongTin();
