// toLowerCase = büyük harfleri küçük harflere çevirir kodumuzda
// sıkıntı olmasın diye önemli!!!

let metin="Meyrema Aybil Bilgisayar Mühendisliği";
let harf=prompt(" lütfen bir harf giriniz..");

let sonuc=bul(harf);
alert("Harf Sayısı: "+sonuc);

function bul(harf){
    let toplam=0;
    for(let i=0;i<metin.length; i++){
       if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
        toplam+=1;
       }
    }
    return toplam;
}
