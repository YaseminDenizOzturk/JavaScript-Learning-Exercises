// let kayitli = true;

let kullanici_Adi = "Yasemin";
let sifre = "123";
//let kayitli = (kullanici_Adi == deniz);

/* if( kayitli == true){
    console.log("Sisteme Kayıtlı");
}
else{
    console.log("Lütfen Kayıt Yapınız...");
}

*/

// else bloğunu başka şekilde de yazabilirdim.
/* if (!kayitli){ böyle true ise değilini alırdı . yazdığım else denk bir kod tercih edilebilir.

} */


if(kullanici_Adi == "deniz"){
    if(sifre == "123"){
        console.log("Kullanıcı Sisteme Kayıtlı");
    }
    else{
        console.log("Şifre Yanlış!");
    }
}

else{
        console.log("Kullanıcı Adı Yanlış!");
    }



