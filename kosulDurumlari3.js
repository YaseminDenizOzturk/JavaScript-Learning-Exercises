let sayi1 = 10;

if(sayi1 >= 10 && sayi1 < 100){
    console.log("Sayı 10-100 aralığındadır");
}

let sayi2 = -30;

if(Math.abs(sayi2 % 2) == 1){ //Math.abs -1 i 1 e dönüştürecek.
    if(sayi2 > 0){
        console.log("Pozitif ve tek sayı");
    }
    else{
        console.log("Negatif ve tek sayı");
    }
}
else{
    console.log("Sayı çifttir.");
}


let a = 40,b = 90,c =30;

if(a > b && a > c){
    console.log("a en büyük");
}
else if(b > a && b > c){
    console.log("b en büyük");
}
else if(c > a && c > b){
    console.log("c en büyük");
}
else{
    console.log("sayılar eşittir.");
}




