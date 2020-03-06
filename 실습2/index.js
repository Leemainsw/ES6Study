const SETTING = { 
    name:"LUCKY LOTTO!",
    count : 6,
    maxNumber : 25
}

colorSet = new Set();

function getRandomNumber({count,maxNumber}){

    for(let i=0; i<=count; i++){
        colorSet.add(Math.floor((maxNumber-1)*Math.random())+1);
    }
    return colorSet;
}


console.log(getRandomNumber(SETTING));