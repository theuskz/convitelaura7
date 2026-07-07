const video = document.getElementById('introVideo');
const intro = document.getElementById('intro');
const site = document.getElementById('site');
const transition = document.getElementById('transition');

video.addEventListener('ended', () => {

  transition.style.opacity = '1';

  setTimeout(() => {

    intro.style.display = 'none';
    site.classList.remove('hidden');

    setTimeout(() => {
      transition.style.opacity = '0';
    }, 300);

  }, 1200);

});

const targetDate = new Date('2026-09-19T19:00:00').getTime();

function updateCountdown(){

  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

}

setInterval(updateCountdown, 1000);
updateCountdown();