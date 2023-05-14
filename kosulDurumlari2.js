// ve operatörü 
// iki şart da doğru olduğunda true
// biri doğru biri yanlış olduğunda false

// veya operatörü
// iki şart da doğruysa true
// biri doğru biri yanlışsa true
// ikisi de yanlışsa false döndürür.

// ingilizce veya ispanyolca bilen üniversite mezunu 27 yaşından büyük kişilerin başvurusunu onaylayan kod

let dilBilmeDurumu = ingilizce;
let yas = 29;
let mezuniyetDurumu;

if(yas > 27 && (dilBilmeDurumu == ingilizce || dilBilmeDurumu == ispanyolca)){
console.log("Başvurunuz Onaylanmıştır...");
}
else{
    console.log("Başvuru Şartlarını Sağlamıyorsunuz!");
}
