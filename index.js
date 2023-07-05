
const clock = document.querySelector(".clock");
let second = 0;
let minute = 0;
let hour = 0;
let intervalId;

const  startStopwatch =  ()=>{
  intervalId =  setInterval(()=>{
  if(second<50){
    second++;
  }
  else if(minute>=59){
    hour++;
    minute = 0;
  }
  else{
    second = 0;
    minute++;
  }

const seconds =String(second).padStart(2,"0");
const minutes =String(minute).padStart(2,"0");
const hours =String(hour).padStart(2,"0");

clock.innerText =`${hours}:${minutes}:${seconds}`;

   // console.log(`${hours}:${minutes}:${seconds}`);
},1000);
};

const  stopStopwatch =  ()=>{
clearInterval( intervalId);
};