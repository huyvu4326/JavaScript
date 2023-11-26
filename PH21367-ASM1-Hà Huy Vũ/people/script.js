class Nguoi {
  constructor(ten, tuoi, diaChi, ngheNghiep, mucLuong) {
    this.ten = ten;
    this.tuoi = tuoi;
    this.diaChi = diaChi;
    this.ngheNghiep = ngheNghiep;
    this.mucLuong = mucLuong;
  }
}
let danhSachNguoi = [
  new Nguoi("Hà Huy Vũ", 21, "Hà Nội", "Fresher", 1000),
  new Nguoi("Trương Thị Thu", 20, "Hà Nội", "Tester", 800),
  new Nguoi("Nguyễn Hoài Nam", 20, "Ninh Bình", "FullStack", 1200),
];
// In thông tin các đối tượng có địa chỉ là 'Ha Noi'
console.log("Thông tin những người có địa chỉ là 'Hà Nội':");
for (let nguoi of danhSachNguoi) {
  if (nguoi.diaChi === "Hà Nội") {
    console.log(nguoi);
  }
}
// Hàm tính tổng mức lương
function tinhTongLuong(nguoiArray) {
  let tongLuong = 0;
  for (let nguoi of nguoiArray) {
    tongLuong += nguoi.mucLuong;
  }
  return tongLuong;
}
// Gọi hàm tính tổng mức lương và in ra console
console.log("Tổng mức lương của 3 người là:", tinhTongLuong(danhSachNguoi));
