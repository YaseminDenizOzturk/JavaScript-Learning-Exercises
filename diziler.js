var bilgisayar1 = "X";
var bilgisayar2 = "Y";
var bilgisayar3 = "Z";

let bilgisayarlar = ["X","Y","Z"];
let fiyatlar = [20000,24000,27000];
let markalar = ["a","b","c"];

let metin = "Front End için JavaScript Öğreniyorum"; // bunu karakter dizisi gibi düşünüyorum.
console.log(metin[2]); // bunun içindeki 2.indeks teki elemanı verir.

console.log(metin.split(" ")); // split içine yazdığımız ifadeye göre string ifadeyi bölecek ve dizi şekline getirecek.


console.log(bilgisayarlar[1]); // bilgisayarlar adında oluşturduğum dizinin 1.indeksindeki elemanı verecektir. yani Y

console.log(fiyatlar[0]);
console.log(fiyatlar[1]);
console.log(fiyatlar[2]);


console.log(`${bilgisayarlar[0]} - ${fiyatlar[0]} - ${markalar[0]}`);
console.log(`${bilgisayarlar[1]} - ${fiyatlar[1]} - ${markalar[1]}`);
console.log(`${bilgisayarlar[2]} - ${fiyatlar[2]} - ${markalar[2]}`);


/* 

let bilgisayar1 = ["X",20000,"a"];
let bilgisayar2 = [];

diziyi bu şekilde oluşturup elemanları indeks olarak aşağıdaki şekilde ekleyebilirim.
ve daha sonra istediğim elemanı değiştirebilirim.



bilgisayar2[0] = "X";
bilgisayar2[1] = "20000";
bilgisayar2[2] = "a";


bilgisayar3 = [
        "Z",
        27000,
        ["d","f","g"] // 3.özelliğini dizi olarak atadım.Bu tarz kullanımlar olabilir.
];

console.log(bilgisayar3[2][2]); bu şekilde dizinin altındaki dizinin verisini yazdırabilirim.

*/
