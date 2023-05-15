let result;
let adres = "X mahalesi , Y sokak , Z apartmanı";
let ehliyetDurumu = "Ehliyeti var";

let url = "www.example.com" 

result = url.length;

result = url.startsWith("www"); // verilen ifadenin bununla başlayıp başlamadığını kontrol eder.

if(result){
    console.log("Evet verilen ifadeyle başlıyor.");
}
else{
    console.log("Hayır verilen ifadeyle başlamıyor.");
}

if(adres.indexOf("Y sokak") > 0){ // indexOf geri dönüş değeri olarak number veriyor.
    console.log("Evet bu ifade var");
}
else{
    console.log("Hayır bu ifade yok");
}

if(ehliyetDurumu.indexOf("yok") > 0){ // olmadığı durumda -1 döndürecek . bu yüzden sıfırdan büyük olup olmama durumunu kontrol ediyorum.
    
    console.log("Bu ifade var");
}
else{
    console.log("Bu ifade yok");
}


