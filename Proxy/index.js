const myObj = {name:'crong', changedValue : 0};
const proxy = new Proxy(myObj, {});

console.log(toString.call(proxy));
console.log(proxy);

console.log(proxy === myObj);
console.log(proxy.name === myObj.name);

const proxy2 = new Proxy(myObj, {
    get : function(){},
    set : function(){
        console.log('change value');
    }
});

console.log(proxy2.name);
proxy2.name = "codesquad"; //->console.log를 안써도 change value 나옴


const proxy3 = new Proxy(myObj, {
    get : function(target, property, receiver){
        console.log('get value');
        return target[property];
    },
    set : function(target, property, value){
        console.log('set value');
        target['changedValue']++;
        target[property] = value;
    }
});

proxy3.name = "a"; //set value
proxy3.name; //get value
console.log(proxy3.name);

console.log(proxy3.changedValue);

//proxy에 써서 
