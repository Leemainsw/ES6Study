//export는 객체형태로 넘어간다

export default function log(data){
    console.log(data);
}  

//utility
export const _={
    log(data){
        if(window.console) console.log(data)
    }
}

export const getTime = ()=> {
    return Date.now();
}

export const getHour = () =>{
    return (new Date).getHours();
}

/* class */

export class MyLogger{
    constructor(props){
        this.lectures = ['java','ios'];
    }
    getLectures(){
        return this.lectures;
    }

    getTime() {
        return Date.now();
    }
}