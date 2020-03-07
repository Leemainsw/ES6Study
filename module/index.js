import log, {getTime,getHour,MyLogger,_} from './myLogger'; //webpack 기능? 

//export & import의 이해

const root = document.querySelectorAll("#root");
root.innerHTML = '<p>Hello world</p>';

const logger = new MyLogger();
log(logger.getLectures());

log('My First Test Data');
log('getTime is ${getTime()}');
log('current hour is ${getHour()}');