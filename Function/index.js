//arrow function

//1
setTimeout(function(){
    console.log("settimeout");
}, 1000);

//2
setTimeout(()=>{
    console.log("settimeout arrow");
}, 1000);

//1번 2번 똑같음

let newArr = [1,2,3,4,5].map(function(value, index, object){
    return value * 2;
});
console.log(newArr);

///////////////////////////
newArr = [1,2,3,4,5].map((v)=>{
    return v * 2;
});
console.log("arrow newArr", newArr);

///////////////////////////
newArr = [1,2,3,4,5].map((v) => v * 2);
console.log("arrow ", newArr);

//////////////////////////////////////////////
//this context of arrow function

const myObj ={
    runTimeOut(){
        setTimeout(function(){
            console.log(this === window);
            this.printData(); //bind(this)를 지우면 "error"
        }, bind(this), 200); //
    },
    printData(){
        console.log("hi codesquad!");
    }
}

myObj.runTimeOut(); //true

//////////////////////////////////////////////
//default parameters

function sum(value, size={value:1}){
    size = size || 1; //기본값 주기 57번 코드 결과 3이 됨
    return value * size.value;
}

console.log(sum (3,10)); //30
console.log(sum(3)); //NaN
console.log(sum(3,{value:3})); //9

//////////////////////////////////////////////
//rest parameters

function checkNum(){
    const argArray = Array.prototype.slice.call(arguments); //
    console.log(argArray); //10,2,3,4,5,"55"
    console.log(toString.call(arguments)); //object arguments
    const result= argArray.every((v)=>typeof v === "number")
    console.log(result); //false
}   

const result = checkNum(10,2,"55");
const result = checkNum(10,2,3,4,5,"55");


