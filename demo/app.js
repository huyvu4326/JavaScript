// // const a = 3;
// // const b = 4;

// // const c = Math.sqrt(a * a + b * b);

// // console.log("Cạnh huyền của tam giác vuông là: " + c);

      function tinhCanhHuyen() {
        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
  
        if (!isNaN(a) && !isNaN(b)) {
          const c = Math.sqrt(a * a + b * b);
          document.getElementById('result').textContent = "Cạnh huyền của tam giác vuông là: " + c;
        } else {
          document.getElementById('result').textContent = "Vui lòng nhập độ dài của cả hai cạnh góc vuông.";
        }
      }
      // function giaiPhuongTrinhBac2(a, b, c) {
//         const delta = b * b - 4 * a * c;
//         if (delta > 0) {
//           const x1 = (-b + Math.sqrt(delta)) / (2 * a);
//           const x2 = (-b - Math.sqrt(delta)) / (2 * a);
//           return [x1, x2];
//         } else if (delta === 0) {
//           const x = -b / (2 * a);
//           return [x];
//         } else {
//           return [];
//         }
//       }
      
//      let a = prompt("Nhập a");
//      let b = prompt("Nhập b");
//      let c = prompt("Nhập c");
//       const nghiem = giaiPhuongTrinhBac2(a, b, c);
//       console.log("Nghiệm của phương trình:", nghiem);
      