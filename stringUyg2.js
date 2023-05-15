var arananBolumler = "Bilgisayar mühendisliği,Yazılım mühendisliği";
var arananDiller = "C#,Java,Python,JavaScript,PHP";

var result;
// ağaşıdaki ifadeyi elde etmeye çalışıyorum bunun için gerekli kodları oluşturacağım.
//bilgisayar muhendisligi-yazılım muhendisligi&C#/Java/Python/JavaScript/PHP

arananBolumler = arananBolumler.toLowerCase(); // öncelikle ilk ifademdeki tüm harfleri küçük harfe dönüştüren metodu kullanıyorum.
arananBolumler = arananBolumler.replaceAll(",","-");

arananBolumler = arananBolumler.replaceAll("ü","u");
arananBolumler = arananBolumler.replaceAll("ğ","g");

arananDiller = arananDiller.replaceAll(",","/");
//sadece replace dersem parantez içinde belirttiğim ifadeyi sadece ilk bulduğu kısımda değiştirir. hepsini değiştirmesi için replaceAll yaptım.


result = `${arananBolumler}&${arananDiller}`;

console.log(result);