let time = {
  d: 6,
  h: 10,
  m: 42,
  s: 12
};

// 1초마다 실행되는 타이머
const timer = setInterval(() => {
  // 초 감소
  time.s--;
  
  // 시간 단위 조정
  if (time.s < 0) {
    time.s = 59;
    time.m--;
    
    if (time.m < 0) {
      time.m = 59;
      time.h--;
      
      if (time.h < 0) {
        time.h = 23;
        time.d--;
        
        // 시간 종료 체크
        if (time.d < 0) {
          clearInterval(timer);
          document.querySelector('.countdown-line').innerHTML = '시간 종료!';
          return;
        }
      }
    }
  }
  
  // 화면 업데이트
  document.getElementById('days').textContent = time.d.toString().padStart(2, '0');
  document.getElementById('hours').textContent = time.h.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = time.m.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = time.s.toString().padStart(2, '0');
}, 1000);
// sec04 swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 3,
  loop:true,
  loopAdditionalSlides: 3,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
breakpoints: {
  1280: {
    slidesPerView: 3,
    spaceBetween: 20
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 28
  },
  720: {
    slidesPerView: 2,
    spaceBetween: 15
  },
  0: {
    slidesPerView: 1,
    spaceBetween: 10
  }
}
});

// sec05 swiper 
var reviewSwiper = new Swiper(".reviewSwiper", {
autoplay: {
  delay: 0,
  disableOnInteraction: false,
},
spaceBetween: 20,
loop: true,
speed: 4000,
loopAdditionalSlides: 3, // 추가 슬라이드 복제 → 마지막 슬라이드에서 멈칫하는 현상 방지
observer: true,
observeParents: true,
mousewheel: false,
simulateTouch: false,
pauseOnMouseEnter: false,
allowTouchMove: false,
grabCursor: false,

breakpoints: {
  1280: {
    slidesPerView: 3.5,
    spaceBetween: 20
  },
  1024: {
    slidesPerView: 2.5,
    spaceBetween: 20
  },
  720: {
    slidesPerView: 2,
    spaceBetween: 15
  },
  0: {
    slidesPerView: 1,
    spaceBetween: 10
  }
}
});


var reviewSwiperReverse = new Swiper(".reviewSwiperReverse", {
autoplay: {
  delay: 0,
  disableOnInteraction: false,
  reverseDirection: true, // 반대 방향으로 슬라이드
},
spaceBetween: 20,
loop: true,
speed: 4000,
loopAdditionalSlides: 3, // 추가 슬라이드 복제 → 마지막 슬라이드에서 멈칫하는 현상 방지
observer: true,
observeParents: true,
mousewheel: false,
simulateTouch: false,
pauseOnMouseEnter: false,
allowTouchMove: false,
grabCursor: false,
breakpoints: {
  1280: {
    slidesPerView: 3.5,
    spaceBetween: 20
  },
  1080: {
    slidesPerView: 2.5,
    spaceBetween: 20
  },
  720: {
    slidesPerView: 2,
    spaceBetween: 15
  },
  0: {
    slidesPerView: 1,
    spaceBetween: 10
  }
}
});

