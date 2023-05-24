//  onluk sayıyı decimal ve binaryye çevirme



// convertDecimalToBinary(25)

// function convertDecimalToBinary(number){

//     let binary="";
//     while(true){
//         binary+=(number%2).toString();
//         number=Math.floor(number/2);
//         if(number==1){
//         binary+=1;
//             break;
//         }
//     }
 
// let result=reverse(binary);
// console.log("sonuç: "+ result);
// }

// function reverse( binary){
//     let reverseBinary="";
//  for(let i=binary.length-1;i>=0;i--){
// reverseBinary+=binary.charAt(i);
//  }
//  return reverseBinary;
// }


// binaryi decimali çevirme
let binary="101010"

function convertBinaryToDecimal(binary){
    let toplam=0;
    let ust=0;
    for(let i=binary.length-1;i>=0;i--){
        if(Number(binary.charAt(i))!=0){
            toplam+= Number(binary.charAt(i))*Math.pow(2,ust);
        }
        ust++;
    }
    console.log("sonuç: "+ toplam);
}
convertBinaryToDecimal(binary);
