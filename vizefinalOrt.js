let vizeNotu = 60;
let finalNotu =40;

let ort = (vizeNotu * 0.4) + (finalNotu * 0.6);

console.log("Vize-Final ortalaması: " + ort);

if(ort >= 45){
    if(finalNotu >= 45){
        console.log("Geçti");
    }
    else{
        console.log("Kaldı");
    }
    
}
else{
    console.log("Kaldı");
}



let sinav1 = 30;
let sinav2 = 90;

let ortalama = (sinav1 + sinav2)/2;

console.log("İki Sınavın Ortalaması: " + ortalama);

if(ortalama >= 45 || sinav2 >= 85){
    console.log("Öğrenci Başarılı");
}
else{
    console.log("Öğrenci Başarısız");
}