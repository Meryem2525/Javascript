// çarpım uygulaması

// for(let i=1;i<=10;i++){
//     for(let j=1; j<=10;j++){
//         console.log(i+"x"+j+"="+(i*j));
//     }
//     console.log("----------------------------------------------------------")
// }



//--------------------------------------------------------

// asal sayı bulma


// let sayi=Number(prompt("lütfen bir sayi giriniz: "));
// let sonuc=true;
// for(let i=2;i<=Math.floor(sayi/2);i++);
// {
//     if(sayi%i==0){
//     sonuc =false;
//     break;
//     }
// }
// if(sonuc){
//     alert(sayi+"asaldır...");
// }else{
//     alert(sayi+"asal sayi değildir...");
// }


//---------------------------------------------------------------

//faktöriyel hesaplama

// let sayi=Number(prompt("lütfen istediğiniz sayi giriniz: "));
// let faktoriyel=1;
// for(let i=1 ;i<=sayi ;i++){
//     faktoriyel=faktoriyel*i;
  
// }
// alert("sonuç: "+faktoriyel);

//---------------------------------------------------------------

//Amstrong sayısı

let sayi=prompt("lütfen sayi giriniz: ");
let toplam=0;
for(let i=0 ; i<sayi.length;i++){
    let rakam = sayi.charAt(i);
    toplam+=rakam*rakam*rakam;
}
if(Number(sayi)==toplam){
    alert("armstrong sayidir");
}else{
    alert("armstrong sayi değildir");
}