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
    homename = "your house";
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

