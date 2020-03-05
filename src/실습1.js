function print(){
    /*
    filter, includes, from을 사용해서 문자열 'e'가 포함된 배열을 만들어서 반환하기.
    */
    let list = document.querySelectorAll("li");
    console.log(toString.call(list)); //object nodelist
    let listArray = Array.from(list); //nodelist -> array li노드로 구성된 배열
    let eArray = listArray.filter(function(v){ //v = 배열 하나하나의 요소 node
        return v.innerText.includes("e");
    });
    console.log(eArray.length);
}
print();