let i = 0;

while (i < 10) {
    console.log(i);
    i += 1; //sonsuz döngüye girmemesi için bu satırı ekliyorum.
}

let k = 20;

while (k > 0) {
    console.log(k);
    i -= 1; //i--
}


let y = 0;

while (y < 10) {
    console.log(y);
    if (y == 8) {
        break
    }
    y++;
}

// let j = 0;

// while ( j < 10){
//     if(j == 5){
//         continue;
//     }
//     console.log(j);
//     i++;
// }


let x = 0;

do {
    console.log(x);
    x++;
} while (x < 10);


for ( let z = 0; z < 10; z++){
    console.log(z);
}


for(let r = 0; r < 10; r++){
    if(r == 5){
        console.log("yazdırılan rakam: " + r);
        continue;
    }
    console.log(r);
}

let toplam = 0;

for (let n = 1; n < 10; n++){
    toplam+=n;
}
console.log(toplam);


let carpimSonucu = 1;

for(let m = 1; m < 10; m++){
    carpimSonucu *= 1;
}
console.log(carpimSonucu);