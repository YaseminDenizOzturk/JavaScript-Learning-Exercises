var dizi = ["matematik","kimya","fizik","biyoloji","coğrafya"];
console.log(dizi.length);

console.log(dizi[0]);
console.log(dizi[1]);
console.log(dizi[2]);
console.log(dizi[3]);

console.log(dizi[dizi.length - 1]); // dizi.length dizinin boyutunu verir. dizi boyutunun bir eksiği son elemanın indis numarasını verir.

console.log(dizi.indexOf("biyoloji"));
console.log(dizi.includes("kimya"));
console.log(dizi.includes("coğrafya"));

dizi[dizi.length] = "geometri"; // geometriyi dizinin sonuna ekliyorum.
dizi.push("tarih"); // dizinin sonuna ekleme yapıyorum.

dizi.pop(); // son elemanı siliyorum.

dizi.splice(dizi.length - 1,1);

console.log(dizi);


var bilgi1 = ["yasemin",2014,[60,80,90]];
var bilgi2 = ["deniz",2002,[70,55,100]];
var bilgi3 = ["elif",2000,[45,75,85]];
var bilgi4 = ["zeynep",2016,[85,85,70]];

let bilgiler = [bilgi1,bilgi2,bilgi3,bilgi4];

let yas1 = new Date().getFullYear()-bilgiler[0][1];
console.log(yas1);

let ort1 = (bilgiler[0][3][0] + bilgiler[0][3][1] + bilgiler[0][3][2]) / 3;
console.log(ort1);
