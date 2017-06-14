function zeroSort(n, digit){
    result = String(n)
    while(result.length < digit){
        result = "0" + result;
    }
    return result;
}

var day = new Date();
var year = day.getFullYear();
var month = day.getMonth() + 1;
var today = day.getDate();
var result = year + "-" + zeroSort(month, 2) + "-" + zeroSort(today, 2);
console.log("creat " + result)

var fs = require('fs');

fs.mkdir(result, function (err) {
});