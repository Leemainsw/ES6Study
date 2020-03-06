//Array -> set, Obj -> map

//map은 key/value 구조

let wm = new WeakMap();
let myfun = function(){};
//이 함수가 얼마나 실행되었지? 를 알려고 할 때

// wm.set(myfun,0);
//console.log(wm); // obj

let count = 0;
for(let i=0; i<10; i++){
    count = wm.get(myfun);//get value
    count++;
    wm.set(myfun,count);
}

console.log(wm.get(myfun));

//////////////////////////////////////////

const wm = new WeakMap();

function Area(height, width){
    wm.set(this,{height,width});
};

Area.prototype.getArea = function(){
    const {height, width} = wm.get(this);
    return height * width;
}

let myarea = new Area(10,20);
console.log(myarea.getArea()); //200
console.log(myarea.height); //10

