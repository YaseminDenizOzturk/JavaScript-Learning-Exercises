var result;
var gunumuz = new Date();

// get metodları
result = gunumuz;
result = gunumuz.getDate(); // gün bilgisini verir.
result = gunumuz.getDay(); // 0. gün = pazar 6.gün = cumartesi
result = gunumuz.getFullYear(); // yıl bilgisini verir.
result = gunumuz.getHours(); // saat bilgisini verir.
result = gunumuz.getTime(); // saat bilgisini milisaniye türünde veriyor.

// set metodları
//gunumuz.setFullYear(2030);
gunumuz.setMonth(1);
gunumuz.setDate(15); // date ile gün bilgisini değiştirmiş olduk.

var dogumTarihi = new Date(2012,8,12);

result = gunumuz.getFullYear() - dogumTarihi.getFullYear();
result = gunumuz - dogumTarihi;
var milisecond = gunumuz - dogumTarihi;
var second = milisecond / 1000; // milisaniyeyi saniyeye çevirdim.
var minute = second / 60; // saniyeyi dakikaya çevirdim.
var hour = minute / 60; // dakikayı saate çevirdim.
var day = hour / 24; // kaç gün geçtiğini böyle bulabilirim.

console.log(result);
console.log(typeof result);
