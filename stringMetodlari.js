let metin = "JavaScript öğreniyorum";
let result;

result = metin.toLowerCase(); // string ifadedeki tüm harfleri küçük harf yapar.

result = metin.toUpperCase(); // string ifadedeki tüm harfleri büyük harf yapar.

result = metin.length; // verilen string ifadedeki karakter sayısını verir.

result = metin[0]; // verilen string ifadedeki 0. karakteri verir.

result = metin[1]; // verilen string ifadedeki 1. karakteri verir.

result = metin.slice(5,10); // verilen string ifadedeki bu karakterler araını gösterecek (ilki başlangıç ikincisi bitiş değeridir.)

result = metin.slice(13); // verilen string ifadedekibu değerden başlayıp bitiş değeri belirtmediği için string ifadenin sonuna kadar gider.

result = metin.slice(-20); // verilen string ifadede tersten başlayıp 20.karakterden sonrasını bitiş değeri belirtmediği için sonuna kadar yazacak.

result = metin.slice(-20,-5); // verilen string ifadede tersten başlayıp 20.karakterden sonrasını -5. karaktere kadar yazacak.

result = metin.substring(0,16); // bu değerler arasını döndürür.

result = metin.substring(16); // bu değerden, bitiş değeri belirtilmediği için, string ifadenin sonuna kadar yazdırır.

result = metin.replace("öğreniyorum","biliyorum"); // replace metodu ifadedeki ilk bilgiyi ikincisiyle değiştirecek.

result = metin.trim(); // bu metod başta ve sondaki bütün boşluk karakterlerini siler.
// yani ifadenin başında veya sonunda boşluk varsa bunları silecek.

result = metin.trimEnd(); // sonda boşluk varsa siler.

result = metin.trimStart(); // ifadenin başında boşluk varsa siler.

result = metin.indexOf("JavaScript"); // ifadedeki bu kelimeyi bulur ve başlangıç indeksini verir.

result = metin.split(" "); // split metodu içine yazılan karaktere göre ifadeyi diziye çevirir.
// mesela split içine boşluk verdiğimde boşluklara göre ayıracak ve bir dizi oluşturacak.


result = metin.split(" ")[0]; // bu şekilde ayırdığımız dizinin 0. elemanını döndürür.

result = metin.split(" ")[1]; // bu şekilde ayırdığımız dizinin 1. elemanını döndürür.

result = metin.includes("Python"); // ifadenin içinde olup olmadığını kontrol etemk istediğimiz ifadeler için kullanılır.

result = metin.includes("JavaScript");  // varsa true yoksa false döndürür.






