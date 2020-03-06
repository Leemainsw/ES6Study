const data = [
    {
        name : 'coffee-bean',
        order :  true,
        items : ['americano','milk','green-tea']
    },
    {
        name : 'starbucks',
        order : false,
    },
    {
        name : 'coffee-king',
        order : true,
        items : ['americano','latte']
    }
]

//json으로  응답을 받고, jsobj로 변한한 뒤 어떠한 데이터처리 조작을 한 뒤 dom에 추가하는 것
//데이터 + html 문자열의 결합이 필요하기 때문에

function fn(tags, name, items){
    // console.log(tags);
    if(typeof items === "undefined"){
        items = "주문가능한 상품이 없습니다.";
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}

data.forEach((v) => {

 let template = `<div>welcome  ${v.name}!!</div> <h2>주문가능항목</h2><div>${v.items}</div>`;
 console.log(template); //welcom coffe-bean!!
});

// const template = `<div>welcome  ${data[0].name}!!</div> <h2>주문가능항목</h2><div>${data[0].items}</div>`;
//data[0].name은 coffe-beans data[1].items는 undefined
// console.log(template); //welcom coffe-bean!!

//taffed template literals

