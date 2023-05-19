let elemanlar = ["a", "b", "c"];
result = elemanlar.length;

result = elemanlar.toString(); // dizi stringe çevrilecek.
result = elemanlar.join("-"); // bu metoda parametre vermemiz gerekir. her bir eleman arasına onu koyarak string e çevirir. araya ayraç gibi düşün.

result = elemanlar.pop(); // dizinin son elemanını siler ve silinen elemanı döndürür.
console.log(elemanlar); // artık son eleman yok.

result = elemanlar.shift(); // dizinin ilk elemanı silinir ve silinen eleman geri döndürülür.

result = elemanlar.push("d");  // push metodu ile sona eleman ekleyebilirim.

result = elemanlar.unshift("f"); // dizinin başına eleman ekler-> unshift

// concat dizileri birleştirir.



console.log(result);