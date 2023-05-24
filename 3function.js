 //geriye return döndüren metot tanımlama 
 // bir değeri metodun çıkarmak ,taşımak için kullanılır
 // bir etodu bitiren anahtar return kelimesidir ondan sonra işlem olmuyor


//1.yöntem

// cube(4);
// function cube(sayi){
//     let sonuc=sayi*sayi*sayi;
//     console.log(sonuc)
// }


//2.yöntem

// let donenDeger=cube(5);
// console.log(donenDeger);

// function cube(sayi){
//     let sonuc=sayi*sayi*sayi;
//     return sonuc;
// }

//3.örnek-yöntem
 let donenDeger=cube(3);
  kareAl(donenDeger);

function kareAl(sayi){
    let sonuc=sayi*sayi;
    console.log(sonuc);
}

function cube(sayi){
    let sonuc=sayi*sayi*sayi;
    return sonuc;
}