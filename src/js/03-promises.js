import { Notify } from 'notiflix/build/notiflix-notify-aio';

refs = {
 
form: document.querySelector('form.form'),
delay: document.querySelector('input[name="delay"]'),
step: document.querySelector('input[name="step"]'),
amount: document.querySelector('input[name="amount"]'),
};

const { form, delay, step, amount } = refs;

form.addEventListener(submit, promiseGenerator)

function promiseGenerator(event) => {
event.preventDefault();

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
