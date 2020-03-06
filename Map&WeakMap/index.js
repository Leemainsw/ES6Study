let mySet = new Set();
// console.log(toString.call(mySer));
//set : 중복없이 유일한 값을 저장하려고 할때, 이미 존재하는지 체크할 때 유용.=
//객체형태를 중복없이 저장하려고 할 때 유용하다.

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

if(mySet.has("crong")); //crong이 있는지 없는지 확인 -> true

mySet.forEach(function(v){
    console.log(v); //3가지의 값을 넣었지만 crong, hary 2개만 나옴
});

mySet.delete("crong");
mySet.forEach(function(v){
    console.log(v);
}); //hary만 나옴

////////////////////////////////////////////////
//weakset
//참조를 가지고 있는 개체만 저장이 가능하다.
let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
ws.add(arr2);
ws.add(obj);

arr = null;

//ws.add(111); //iNvaild value error
//ws.add("111"); //iNvaild value error
// ws.add(null); //iNvaild value error
//ws.add(function(){}) //잘 나옴

console.log(ws); //잘 나옴
console.log(ws.has(arr),ws.has(arr2)); //false,true
