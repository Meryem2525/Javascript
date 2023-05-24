// tyt puan hesaplama 
// türkçe=40
// matematik=40
// sosyal=20
// fen=20
// 100 puan ösym veriyor
// okul puanı max 60

let turkceDogru,turkceYanlis=0;
let matematikDogru,matematikYanlis=0;
let sosyalDogru,sosyalYanlis=0;
let fenDogru,fenYanlis=0;
let puan=0;
let okulPuani=0;
let yeniSatir="\r\n";
let mesaj="tyt puan hesaplama uygulamasına hoşgeldiniz"+yeniSatir
+"1-Puan Hesapla"+yeniSatir
+"2-Çıkış yap";

// alert(mesaj);

let secim=prompt(mesaj);
switch(secim){
    case "1":
        let okulPuani=Number(prompt("okul puani giriniz"));
        turkceDogru=Number(prompt("türkçe doğru sayısı")) ;
        turkceYanlis=Number(prompt("türkçe yanlış sayısı"));

        matematikDogru=Number(prompt("matematik doğru sayısı"));
        matematikYanlis=Number(prompt("matematik yanlış sayısı"));

        fenDogru=Number(prompt("fen doğru sayısı"));
        fenYanlis=Number(prompt("fen yanlış sayısı"));

        sosyalDogru=Number(prompt("sosyal doğru sayısı"));
        sosyalYanlis=Number(prompt("sosyal yanlış sayısı"))
         let dogruSayisi=turkceDogru+matematikDogru+sosyalDogru+fenDogru;
         let yanlişSayisi=turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;
         let kalanDoğrusayisi=dogruSayisi-(yanlişSayisi/4);
         puan=(kalanDoğrusayisi*4) + 100 + okulPuani;
         alert("tyt puanınız"+puan);
        break;

    case "2":
        alert("Uygulamadan çıkış yapıldı");
        break;
        
        default :
        alert("lütfen geçerli aralıkta sayi giriniz..");
        break;
}
