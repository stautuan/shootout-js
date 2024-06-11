'use strict';

const countEl = document.querySelector('.count');
const messageEl = document.querySelector('.message');
const conditionEl = document.querySelector('.condition');

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

        const defeat = setTimeout(() => {
          conditionEl.innerHTML = 'And shoots. You are dead.';
          window.removeEventListener('keydown', victory);
        }, 500); // time limit to press a key

        function victory() {
          clearTimeout(defeat);
          conditionEl.innerHTML = 'But you shoot first. You killed him.';
        }
        window.addEventListener('keydown', victory);
      }, randomDelay);
    }
  }, 1000);
}

paces(10);
