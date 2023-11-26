let n = prompt("Nhập n: ");
n = parseInt(n);
if (isNaN(n) || n <= 0) {
  console.log("Giá trị nhập vào phải là số nguyên dương.");
}
let tong = 0;
for (let i = 1; i <= n; i += 2) {
  tong += i;
}
console.log("Tổng các số lẻ từ 1 đến", n, "là:", tong);
