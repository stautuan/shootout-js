'use strict';

const countEl = document.querySelector('.count');

function paces(seconds) {
  let count = 0;

  const timer = setInterval(() => {
    count++;
    countEl.innerHTML += `${count}...<br />`;

    if (count >= seconds) {
      clearInterval(timer);
    }
  }, 1000);
}

paces(10);
