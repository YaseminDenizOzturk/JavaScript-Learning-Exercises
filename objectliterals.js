let kullaniciBilgisi;

let kullanici = {
    userName: "yasemindeniz",
    firstName: "Yasemin",
    lastName: "Ozturk",
    age: 19,
    hobbies: ["müzik", "kitap"],
    address: {
        city: "İstanbul",
        country: "Türkiye",
        phoneNumber: "11111",

    }

}

kullaniciBilgisi = kullanici;
kullaniciBilgisi = kullanici.firstName;
kullaniciBilgisi = kullanici.lastName;
kullaniciBilgisi = kullanici.hobbies;
kullaniciBilgisi = kullanici.hobbies.length; // hobilerinin sayısını verir.

kullaniciBilgisi = kullanici.address.phone;
kullaniciBilgisi = kullanici.address.country;

console.log(kullaniciBilgisi);
console.log(typeof kullanici);



