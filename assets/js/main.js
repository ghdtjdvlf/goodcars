//ser04 timer
  // 초기 시간 설정: 6일 10시간 42분 12초 52(1/100초)
  let remainingTime = (6 * 24 * 60 * 60 * 1000) + 
  (10 * 60 * 60 * 1000) + 
  (42 * 60 * 1000) + 
  (12 * 1000) + 
  52;

function updateCountdown() {
// 시간 계산
const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
const milliseconds = Math.floor(remainingTime % 1000 / 10); // 1/100초 단위로 표시

// 화면 업데이트
document.getElementById('days').textContent = days.toString().padStart(2, '0');
document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
document.getElementById('milliseconds').textContent = milliseconds.toString().padStart(2, '0');

// 시간 감소
remainingTime -= 10; // 1/100초 단위로 감소 (10ms)

// 시간이 종료되면 clearInterval
if (remainingTime <= 0) {
clearInterval(countdownInterval);
document.getElementById('milliseconds').textContent = '00';
alert('시간이 종료되었습니다!');
}
}

// 10ms마다 업데이트 (1/100초 단위)
const countdownInterval = setInterval(updateCountdown, 10);

// 초기 화면 업데이트
updateCountdown();

//sec04 swiper 

var swiper = new Swiper(".mySwiper", {
  slidesPerView:3,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

