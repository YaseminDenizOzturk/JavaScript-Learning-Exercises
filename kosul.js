const firstName = "Yasemin";
const userName = "yasemindeniz";
const isStudent = true;
const school = "university";
const age = 19;

if (userName == "yasemindeniz") {
    console.log("Welcome Yasemin");
}
else {
    console.log("Kullanıcı Adı Hatalı!");
}

if (isStudent) {
    console.log("Bölümünüz nedir?");
}
else {
    console.log("Mesleğiniz Nedir?");
}

if (age >= 18) {
    if (school == "university") {
        console.log("Ehliyet Alablilirsiniz.");
    }
    else {
        console.log("Ehliyet Alabilmek İçin Gerekli Eğitim Şartını Sağlamıyorsunuz!");
    }
}
else {
    console.log("Yaşınız Ehliyet Almaya Uygun Değil!");
}


let id = "12345";

if (typeof id != "undefined") {
    console.log("id: " + id);
}
else {
    console.log("no id");
}