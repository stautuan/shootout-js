'use strict';

const countEl = document.querySelector('.count');
const messageEl = document.querySelector('.message');

function paces(seconds) {
  let count = 0;

  const timer = setInterval(() => {
    count++;
    countEl.innerHTML += `${count}...<br />`;

    if (count >= seconds) {
      clearInterval(timer);

      const randomDelay = Math.floor(Math.random() * 5 + 1) * 1000;
      console.log(randomDelay);
      setTimeout(() => {
        messageEl.innerHTML = 'He draws.....';
      }, randomDelay);
    }
  }, 1000);
}

paces(10);
