let ogrenci1Adi = "Zeynep";
let ogrenci1Soyadi = "Yilmaz";
let ogrenci1DogumTarihi = "2000";
let ogrenci1_sinavNotu1 = 100;
let ogrenci1_sinavNotu2 = 85;


let ogrenci2Adi = "Serpil";
let ogrenci2Soyadi ="Yilmaz";
let ogrenci2DogumTarihi = "2004";
let ogrenci2_sinavNotu1 = 90;
let ogrenci2_sinavNotu2 =50;

let gunumuzTarihi = new Date().getFullYear();
// bu metod sadece yılı verecek getFullYear dediğim için


let ogrenci1Yasi = gunumuzTarihi - parseInt(ogrenci1DogumTarihi);
let ogrenci2Yasi = gunumuzTarihi - parseInt(ogrenci2DogumTarihi);

console.log(ogrenci1Yasi);
console.log(ogrenci2Yasi);

//öğrencilerin ders notu ortalamalarını hesaplayalım.

let ogrenci1Ort = (ogrenci1_sinavNotu1 + ogrenci1_sinavNotu2) / 2;
let ogrenci2Ort = (ogrenci2_sinavNotu1 + ogrenci2_sinavNotu2) / 2; 
console.log(ogrenci1Ort); // bu koda parseInt eklersek ondalıklı kısım gözükmez sadece tam sayı olan ortalamayı görürüz . şöyle yazılır console.log(parseInt(ogrenci1Ort))
console.log(ogrenci1Ort >= 45); //başarılı olma şartı


console.log(ogrenci2Ort); // ondalıklı kısmı görmek istiyorsak parseFloat ekleriz.
console.log(ogrenci2Ort >= 45); //başarılı olma şartı  