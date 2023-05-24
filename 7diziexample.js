let urun1 = {
    isim:"LENOVA",
    fiyat:15.000,
    kategori:"Teknoloji"
}

let urun2={
    isim:"MONSTER",
    fiyat:22.500,
    kategori:"teknoloji"
}

let urun3={
    isim:"LENOVA",
    fiyat:32.599,
    kategori:"teknoloji"
}

let urun4={
    isim:"MONSTER ABRA",
    fiyat: 28.999,
    kategori:"teknoloji"
}

let urun5={
    isim:"LENOVA WİNDOWS",
    fiyat:25.999,
    kategori:"teknoloji"
}

let urunler=[urun1,urun2,urun3,urun4,urun5];
let filtreliUrunler=[];
let kullaniciUrunIsmi =prompt("istediğiniz ürünü giriniz...");


getfiltereliUrunler(urunler);
filtreliUrunlerYazdir(filtreliUrunler);


function getfiltereliUrunler(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
    filtreliUrunler.push(urun);
        }
    
    }); 
}


function filtreliUrunlerYazdir(urunler){
urunler.forEach(function(urun){
    console.log("------------------------------------------------");
    console.log("|"+ urun.isim + "|" + urun.kategori + "|" + urun.fiyat);
    console.log("------------------------------------------------");

});

}