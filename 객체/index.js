function Health(name){
    this.name = name;
}

Health.prototype.showHealth = function(){
    console.log(this.name +"님 안녕하세요.");
}

const h = new Health("crong");
h.showHealth();

class Health2{
    constructor(name, lastTime){
        this.name = name;
        this.lastTime = lastTime;
    }

    showHealth2(){
        console.log("안녕하세요"+this.name);
    }
}

const myHealth = new Health2("crong2");
myHealth.showHealth2();

//////////////////////////////////
//Object assign 메서드
var healthObj = {
    showHealth : function(){
        console.log("오늘의 운동시간 : " + this.healthTime);
    }
}

const myHealth2 = Object.create(healthObj);
myHealth2.healthTime = "11:20";
myHealth2.name = "crong";

console.log(myHealth2)

const myHealth3 = Object.assign(Object.create(healthObj),{
    name : "crong",
    lastTime : "11:20"
});
console.log("myhealth is ",myHealth3);

//////////////////////////////////
//Object assign으로 Immutable 객체만들기

const previousObj = {
    name : "crong",
    lastTime : "11:20"
};

const myHealth4 = Object.assign({}, previousObj, {"lastTime" : "12:30"});
console.log("myhealth is " , myHealth4);

const previousObj2 = {
    name : "crong",
    lastTime : "11:20"
};

const myHealth5 = Object.assign({}, previousObj, {
    "name" : "honux",
    "age" : 99
});
console.log(previousObj2 === myHealth5);

//////////////////////////////////
//Object setPrototypeOf로 객체만들기

const healthObj3 = {
    showHealth : function(){
        console.log("오늘 운동시간 : " + this.healthTime);
    },
    setHealth : function(newTime){
        this.healthTime = newTime;  
    }
}

const myHealth6 = Object.assign(Object.create(healthObj),{
    name : "crong",
    lastTime : "11:20"
});

Object.setPrototypeOf(myHealth6, healthObj3)
console.log(myHealth6);


const myHealth7 = Object.setPrototypeOf({
    name : "crong",
    lastTime : "11:20"
}, healthObj3);

console.log(myHealth7);

////////////////////////////////////////////////
//Object setPrototypeOf 로 객체간 prototype chain생성하기
const healthObj5 = {
    showHealth : function(){
        console.log("오늘 운동시간 : " + this.healthTime);
    },
    setHealth : function(newTime){
        this.healthTime = newTime;
    }
}

const healthChildObj = {
    getAge : function(){
        return this.age;
    }
}

const lastHealthObj = Object.setPrototypeOf(healthChildObj, healthObj5);

const childObj = Object.setPrototypeOf({
    age:22
}, healthChildObj);

childObj.setHealth("11:55");

console.log("childobj is " + childObj);