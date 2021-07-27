const days  = document.querySelector('#days');
const hours  = document.querySelector('#hours');
const mins  = document.querySelector('#mins');
const seconds  = document.querySelector('#seconds');
const newYear = '1 Jan 2022';


function countTime(){
    //new years date
    const newYearsDate  = new Date(newYear);
    //Current Date
    const currentDate  = new Date();
    const remainingDate = new Date(newYearsDate -currentDate );  
    days.innerHTML  = remainingDate.getDate();
    hours.innerHTML  = remainingDate.getHours();
    mins.innerHTML  = remainingDate.getMinutes()
    seconds.innerHTML  =remainingDate.getSeconds();
}
countTime();

setInterval(countTime , 1000);


