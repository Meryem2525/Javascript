// this kullanılabilir çok işimize yarar kısa sürede
// kod yazmamızı sağlar

function player(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age;
}
let players=[
    new player("meyrema","aybil",18),
    new player("kader","aybil",16),
    new player("melike","mollogulları",20)
];
console.log(players[2].surname);
console.log(players[1].age);
console.log(players[0].name);


