let result;

result = 13;
result = "13";
result = Number("13");

result = parseInt("12.5"); // parseInt string ifadeyi int e çevirir.

result = parseFloat("12.5"); // parseFloat string ifadeyi floata çevirir.

result = parseInt("23n");

result = parseInt("n24");

result = isNaN("23n"); // içinde string olmayan bir şey olup olmadığını kontrol ediyor.
//string olmayan bir şey varsa true 
//yoksa false değer döndürür.

console.log(typeof result); // result tipini bulur.
// boolean

console.log(result);


var sayi = 12.345678;

result = sayi.toPrecision(4);
// bu metod içine girdiğimiz sayı kadar basamağı gösterecek ama küçük bir detay var mesela 4 basamaklı istedim ama diğer basamakların değerine göre yuvarlama çok önemli
// örneğin 12.34567  4.basamaktan sonrası yuvarlanınca -> 12.35 olur.



result = sayi.toFixed(5);
// bu metodda tam sayı kısmı ile birlikte değil de ondalıklı kısımda girdiğimiz sayı kadar sayı gösterir.
// ve yine bu metodda da yuvarlama durumu geçerli.


result = Math.round(5.3); //en yakın sayıya yuvarlar.
result =Math.round(1.7); 

result = Math.ceil(4.8); // ondalıklı kısma hiç bakmadan her zaman yukarı yuvarlar.

result = Math.floor(1.9); // ondalıklı kısma hiç bakmadan her zaman aşağı yuvarlar.

result = Math.sqrt(36); // sayının karekökünü alır.

result = Math.pow(4,3); // sayının üssünü alır. Math.pow(taban,üs) şekilinde kullanılır.

result = Math.abs(-1); // mutlak değer fonksiyonu

result = Math.min(9,8,7,6,5,4,3,2,1); // en büyük sayıyı bulur.

result = Math.max(1,2,3,4,5,6,7,8,9); // en küçük sayıyı bulur.

result = Math.random(); // rastgele sayı üretir.

result = Math.random() * 10; //  0-9 arasında sayılar üretecek.

result = Math.floor(Math.random() * 10) + 1; //  1-10 arasında sayılar üretecek.

result = Math.floor(Math.random() * 100) + 1; // 1-100 arasında sayılar üretecek.

result = Math.floor(Math.random() * 100) + 10; // 10-110 arasında sayılar üretecek.


console.log(result);