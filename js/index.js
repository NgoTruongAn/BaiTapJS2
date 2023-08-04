// BAI 1
document.getElementById("salary").onclick = function () {
    // B1: xác định input  
    var salary1Day = 100000;
    var dayWork = +document.getElementById("dayWork").value;
    // B2: các bước xử lý
    var totalSalary = dayWork * salary1Day;
    // B3: hiển thị kết quả
    document.getElementById("result")
      .innerHTML = `Tổng lương nhân viên là : ${totalSalary} VNĐ`;
};
// BAI 2
document.getElementById("number").onclick = function () {
    // B1: xác định input  
    //gán vào 5 số thực
    var s1 = +document.getElementById("s1").value;
    var s2 = +document.getElementById("s2").value;
    var s3 = +document.getElementById("s3").value;
    var s4 = +document.getElementById("s4").value;
    var s5 = +document.getElementById("s5").value;
    // B2: các bước xử lý
    average = parseFloat((s1 + s2 + s3 + s4 + s5)/5);
    // B3: hiển thị kết quả
    document.getElementById("resultNumber")
     .innerHTML = `Trung bình 5 số là : ${average}`;
};
// BAI 3
document.getElementById("exUSD").onclick = function () {
    // B1: xác định input  
    const USD = 23500;
    var exchange = +document.getElementById("exchange").value;
    // B2: các bước xử lý
    exchangeUSD = exchange * USD;
    // B3: hiển thị kết quả
    document.getElementById("resultUSD")
    .innerHTML = `Quy đổi ra VNĐ là : ${exchangeUSD} VNĐ`;
};
// BAI 4
document.getElementById("rectangle").onclick = function () {
    // B1: xác định input  
    var length = +document.getElementById("length").value;
    var width = +document.getElementById("width").value;
    // B2: các bước xử lý
    var area = length*width;
    var perimeter = (length + width)*2;
    // B3: hiển thị kết quả
    document.getElementById("resultRectangle")
    .innerHTML = `Diện tích HCN là : ${area} <br> Chu vi HCN là : ${perimeter} ` ;
};
// BAI 5
document.getElementById("calNumber").onclick = function () {
    // B1: xác định input  
    var twoNumber = +document.getElementById("twoNumber").value;
    // B2: các bước xử lý
    units = Math.floor(twoNumber%10);
    tens = Math.floor(twoNumber/10);
    totalNumber = units + tens;
    // B3: hiển thị kết quả
    document.getElementById("resultCalNumber")
   .innerHTML = `Tổng 2 ký số là: ${totalNumber}`;
};

