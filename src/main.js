//let -> 블럭단위에서 사용됨
var name = "global var";

function home(){
    var homevar = "homevar";
    for(var i=0; i<100; i++){}
    console.log(i);
}

home();

////////////////////////////////////////////////

var list = document.querySelectorAll("li");
for(let i=0; i<list.length; i++){
    list[i].addEventListener("click", function(){
        console.log(i+"번째 이벤트입니다.");
    });
}

////////////////////////////////////////////////

function home2(){
    const homename="my house";
    console.log(homename);
}

home2();


////////////////////////////////////////////////

function home3(){
    const list = ["apple","orange","watermelon"];
    list.push("banana"); //const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다. 
    console.log(list);
}
//immutable array를 어떻게 만들지?
//뒤로가기 앞으로가기 등
const list2 = ["apple","orange","watermelon"];
list3 = [].concat(list2, "banana");
console.log(list2 === list3);

////////////////////////////////////////////////

let str = "hello world ! ^^ ~~";
let matchstr = "hello";
console.log(str.startsWith(matchstr)); //true
console.log(str.endsWith(matchstr)); // matchstr -> ^ ~~ = true
console.log(str.includes(matchstr)); //true

////////////////////////////////////////////////

var data = [1,2, undefined, NaN, null, ""];
for(var i=0; i<data.length; i++){console.log(i);}
data.forEach(function(value){console.log("valueis",value);});
//Array.prototype.getIndex = function(){};
for(let idx in data){console.log(data[idx]);}
for(let value of data){console.log(value);}
var str1 = "hello world"
for(let value of str1){console.log(value);}

////////////////////////////////////////////////

// spread operator - 배열의 복사
//spread operator , 펼침연산자
let pre = ["apple","orange", 100];
let newData = [...pre]; 
console.log(pre,newData); //같은 값 나옴
console.log(pre===newData); //false

////////////////////////////////////////////////

//spread operator - 몇가지 활용
//1
let pre2 = [100,200,"hello",null];
let newData2 = [0,1,2,3, ...pre ,4];

//2
function sum(a,b,c){
    return a+b+c;
}
pre2 = [100,200,300];
sum.apply(null, pre);
sum(...pre2);

////////////////////////////////////////////////

//ES6 from 메서드로 진짜 배열 만들기
// function addMark(){
//     let newData3=[];
//     for(let i=0; i<arguments.length; i++){
//         newData3.push(arguments[i]+"!");
//     }

//     let newArray = Array.from(arguments); //아래 오류 없어짐
//     //arguments는 배열이 아니기 때문에 아래 코드는 오류가 난다.
//     newData3 = arguments.map(function(value){
//         return value+"!";
//     });

//     console.log(newData3);  
// }

// addMark(1,2,3,4,5);

////////////////////////////////////////////////

//Object 간단하게 객체생성하기
const name1 = "crong";
const age1 = 33;

const obj = {
    name : name1,
    age : age1
}

console.log(obj);

////////////////////////////////////////////////

function getObj(){
    const name2 = "crong"
    const getName = function(){return name2;}
    const setName = function(newname){name2=newname;}
    const printName = function(){console.log(name);}
    return {getName:getName,setName:setName}
    //return {getName,setName} -> 위랑 똑같음
}

var obj12 = getObj();
console.log(obj12);

////////////////////////////////////////////////

//destructuring
let data12 = ["crong", "honux", "jk", "jinny"];
let [jisu,,,jung] = data12;
console.log(jisu, jung); //crong, jk, crong, js=k
//let jisu = data[0];
//let jung = data[2];

////////////////////////////////////////////////

//destructuring obj

let obj1234 = {
    name : "crong",
    address : "korean",
    age : 10
}

//let {name, age} = obj1234;
//console.log(name,age);

let{name:myName, age:myAge} = obj1234;
console.log(myName,myAge);

////////////////////////////////////////////////

var news = [
    {
        "title" : "sbs",
        "imgurl" : "https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/lecture/6994",
        "newslist":[
            "aaaaaa",
            "bbbbbb",
            "cccccc",
        ]
    },
    {
        "title" : "mbc",
        "imgurl" : "https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/lecture/6994",
        "newslist":[
            "aaaaaa",
            "bbbbbb",
            "cccccc",
        ]
    }
];

// let [,mbc] = news;
// let {title, imgurl} = mbc;
// console.log(title,imgurl);

let[, {title,imgurl}] = news;
console.log(imgurl);

function getNewsList([,{newslist}]){
    console.log(newslist);
}

getNewsList(news);

