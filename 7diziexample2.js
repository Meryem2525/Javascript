// kitap bulma uygulaması

let kitap1={ isim:"Her şeyi düşünme",yazar:"Anne Bogol",fiyat:25,raf:"1.5 raf"}
let kitap2={ isim:"Hiçbir Karşılaşma Tesadüf Değildir",yazar:"Hakan Mangüç",fiyat:25,raf:"3.5 raf"}
let kitap3={ isim:"İnsan Ne İle Yaşar",yazar:"Tolstoy",fiyat:25,raf:"2.5 raf"}
let kitap4={ isim:"Zafer Sızlanarak Kazanılmaz",yazar:"Haluk Tatar",fiyat:25,raf:"4.3 raf"}
let kitap5={ isim:"Şeker Portakalı",yazar:"Jose Mauro",fiyat:25,raf:"5.5 raf"}

let kitaplar=[kitap1,kitap2,kitap3,kitap4,kitap5];

let raf11={kod:"1.1raf" ,goster:false}
let raf12={kod:"1.2raf" ,goster:false}
let raf13={kod:"1.3raf" ,goster:false}
let raf14={kod:"1.4raf" ,goster:false}
let raf15={kod:"1.5raf" ,goster:false}


let raf21={kod:"2.1raf" ,goster:false}
let raf22={kod:"2.2raf" ,goster:false}
let raf23={kod:"2.3raf" ,goster:false}
let raf24={kod:"2.4raf" ,goster:false}
let raf25={kod:"2.5raf" ,goster:false}


let raf31={kod:"3.1raf" ,goster:false}
let raf32={kod:"3.2raf" ,goster:false}
let raf33={kod:"3.3raf" ,goster:false}
let raf34={kod:"3.4raf" ,goster:false}
let raf35={kod:"3.5raf" ,goster:false}

let raf41={kod:"4.1raf" ,goster:false}
let raf42={kod:"4.2raf" ,goster:false}
let raf43={kod:"4.3raf" ,goster:false}
let raf44={kod:"4.4raf" ,goster:false}
let raf45={kod:"4.5raf" ,goster:false}


let raf51={kod:"5.1raf" ,goster:false}
let raf52={kod:"5.2raf" ,goster:false}
let raf53={kod:"5.3raf" ,goster:false}
let raf54={kod:"5.4raf" ,goster:false}
let raf55={kod:"5.5raf" ,goster:false}

let raflar=[
    [raf51,raf52,raf53,raf54,raf55],
    [raf41,raf42,raf43,raf44,raf45],
    [raf31,raf32,raf33,raf34,raf35],
    [raf21,raf22,raf23,raf24,raf25],
    [raf11,raf12,raf13,raf14,raf15]];

function rafOlustur(){
console.clear();
let satir="";
    for(let i=0; i<raflar.length ;i++){
        for(let j=0; j<5;j++){
          satir+="|" +  (raflar[i][j].goster ? raflar[i][j].kod :"---")+ "";   
            }
            console.log(satir);
            console.log("-------------------------");
            satir="";
    }

}

function kodBul(kitapIsmi){
    let rafKod=null;
   kitaplar.forEach(function(kitap){
if(kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(),0)){
rafKod=kitap.raf;
}
   });  
   return rafKod;   
}

function raftaGoster(rafKodu){
    for(let i=0; i<raflar.length; i++){
        for(let j=0; j<5; j++){
            if(raflar[i][j].kod==rafKodu){
                raflar[i][j].goster=true;
                break;
            }
        }
    }
}

rafOlustur();

let kitapIsmi=prompt("lütfen bir kitap ismi giriniz. ");
let rafKod = kodBul(kitapIsmi);

if(rafKod !=null){
    raftaGoster(rafKod);
    rafOlustur();
}else{
    alert("girdiğiniz kitap kütüphanemizde bulunmamaktadır..");
}
