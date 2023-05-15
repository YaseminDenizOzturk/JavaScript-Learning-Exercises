let isim = "yasemin";
let soyisim = "ozturk";
let yas = 19;
let sehir ="X";

let metin = "Benim ismim " + isim + ' ve soyismim ' + soyisim + '.' + sehir + '\'de yaşıyorum.' + (65-yas) + 'yıl sonra emekli olacağım.';

metin =`Benim ismim ${isim} ve soyismim ${soyisim}.${sehir}' de yaşıyorum.Emekliliğe ${65-yas} yılım kaldı.`;
console.log(metin);

//let emekliOlmaDurumu = (65-yas > 0) ? "":"" parantez içi true ise ilk tırnak içi çalışır. false ise ikinci tırnak içi çalışır.
let emekliOlmaDurumu = (65-yas > 0) ? "emekliliğe " +(65-yas) + " yılım kaldı":"emeklisiniz";
console.log(emekliOlmaDurumu);