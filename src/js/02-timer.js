import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let intervalId = null;
startBtn.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
        alert("Please choose a date in the future")
        return
    }
    startBtn.disabled = false;
  },
};

flatpickr('input#datetime-picker', options)

startBtn.addEventListener("click", onStartBtnClick);

function onStartBtnClick() {
    startBtn.disabled = true;
 intervalId = setInterval(() => {
    const finishDate = new Date(input.value);
    const startTime = new Date();
    const deltaTime = finishDate - startTime;
    const time = convertMs(deltaTime);
    console.log(time);

    if (deltaTime >= 0) {
    daysEl.textContent = time.days;
    hoursEl.textContent = time.hours;
    minutesEl.textContent = time.minutes;
    secondsEl.textContent = time.seconds;
};
 }, 1000);;
}





function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value){
return String(value).padStart(2, '0')
}










// class Timer {
//     constructor({onTick}){
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;

//     this.init();
//     }

//     init(){
//         const time = this.convertMs(0);
//         this.onTick(time);
//     }

//     start(){
//         if (this.isActive) {
//            return; 
//         }

//         // const startTime = 
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentDate - currentTime;
//             const time = this.convertMs(deltaTime);

//             this.onTick(time);
//         }, 1000);
//     }

//     // stop(){
//     //     clearInterval(this.intervalId);
//     //     this.isActive = false;
//     //     const time = this.convertMs(0);
//     //     this.onTick(time);
//     // }

//     convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }

// addLeadingZero(value){
// return String(value).padStart(2, '0')
// }
// }

// const Timer = new Timer({
//     onTick: updateClockFace,
// });

// startBtn.addEventListener("click", startTimer);

// function startTimer(evt) {
//     timer.start()
// }


// function updateClockFace({days, hours, minutes, seconds}) {
//     daysEl.textContent = `${days}`;
//     hoursEl.textContent = `${hours}`;
//     minutesEl.textContent = `${minutes}`;
//   secondsEl.textContent = `${seconds}`;
// }



