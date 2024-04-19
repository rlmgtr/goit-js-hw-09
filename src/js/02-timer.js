import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpicker.min.css';
import { Notify } from "notiflix/build/notiflix-notify-aio";

const ref = {
    dateTimPicker: document.querySelector('input#datetime-picker'),
    startButton: document.querySelector('button[data-start]'), 
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
};

refs.startButton.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      const selectedDate = selectedDates[0]
      const startTime = Date.now();

 
    if (selectedDates < startTime) {
        Notify.failure("Please choose a date that is ahead that today's date");
        refs.startButton.disabled = true;
        return;
    }

    refs.startButton.disabled = false;
    let intervalID = null;

    refs.startButton.addEventListener('click', startCountDown);

    function startCountDown() {
        refs.startButton.disabled = true;
        refs.dateTimPicker.disabled = true;

        intervalID = setInterval(()=> {
            const currentTime = Date.now();
            if (selectedDate < currentTime) {
                clearInterval(intervalID);
                refs.dateTimPicker.disabled = false;
                return;
            }

            const timeDifference = selectedDate - currentTime;


        })
    };

    },
  }; 

  flatpickr(refs.dateTimPicker, options);

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
 