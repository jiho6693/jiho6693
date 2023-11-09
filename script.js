
function scrollToBottomSlowly() {
  // 현재 스크롤 위치
  var currentPosition = window.scrollY;
  
  // 스크롤할 거리
  var scrollStep = 25; // 매 스크롤마다 5px씩 이동
  
  // 목표 위치 (가장 하단)
  var targetPosition = document.body.scrollHeight - window.innerHeight;
  
  // 스크롤이 목표 위치에 도달했는지 확인
  if (currentPosition < targetPosition) {
      // 스크롤할 거리가 남았다면 스크롤을 이동
      window.scrollTo(0, currentPosition + scrollStep);
  } else {
      // 목표 위치에 도달하면 setInterval을 멈춤
      clearInterval(scrollInterval);
  }
}

// 스크롤을 일정 간격으로 천천히 내려가게 설정
var scrollInterval = setInterval(scrollToBottomSlowly, 20); // 100 밀리초 (0.1초)마다 스크롤


// window.addEventListener("scroll", function () {
//   const category1 = document.getElementsByClassName("category1")[0]; // Select the first element with class "category1"
//   const scrollY = window.scrollY;

//   // Define a scroll threshold (adjust the value as needed)
//   const scrollThreshold = 10;

//   if (scrollY > scrollThreshold) {
//     // Hide the "category1" div by adding a CSS class
//     category1.classList.add("hidden");
//   } else {
//     // Show the "category1" div by removing the CSS class
//     category1.classList.remove("hidden");
//   }
// });



// function createRaindrop() {
//   const raindrop = document.createElement("div");
//   raindrop.className = "raindrop";
//   raindrop.style.left = `${Math.random() * 100}%`;
//   document.getElementById("rain").appendChild(raindrop);

//   // 비방울이 물에 닿았을 때 이벤트 처리
//   function handleRaindropAnimationEnd() {
//     raindrop.removeEventListener("animationiteration", handleRaindropAnimationEnd);
//     raindrop.removeEventListener("animationend", handleRaindropAnimationEnd);

//     // 비방울 제거
//     raindrop.remove();

//     // 물을 생성하고 화면 하단에 배치
//     const waterContainer = document.querySelector(".water-container");
//     const water = document.createElement("div");
//     water.className = "water";
//     waterContainer.appendChild(water);
//     fillWater();
//   }

//   raindrop.addEventListener("animationiteration", handleRaindropAnimationEnd);
//   raindrop.addEventListener("animationend", handleRaindropAnimationEnd);
// }

// 물을 채우는 함수
// function fillWater() {
//   const waterContainer = document.querySelector(".water-container");
//   const waterLevel = waterContainer.offsetHeight;

//   // 물의 높이를 조절할 수 있도록 스타일을 설정
//   waterContainer.style.height = `${waterLevel + 1}px`; // 높이를 10px 증가시킴
// }

// // 일정 시간마다 물을 채우기
// setInterval(createRaindrop, 300); // 빗방울 생성 간격을 줄임



function createRaindrop() {
  const raindrop = document.createElement("div");
  raindrop.className = "raindrop";
  raindrop.style.left = `${Math.random() * 100}%`;
  document.getElementById("rain").appendChild(raindrop);

  raindrop.addEventListener("animationiteration", () => {
    // 비방울이 화면 하단에 도달하면 제거
    raindrop.remove();
  });
}

setInterval(createRaindrop, 200); // 새로운 비방울을 일정 간격으로 생성

// function updateClock() {
//   const clock = document.getElementById('clock');
//   const now = new Date();

//   // 시, 분, 초 추출
//   const hours = String(now.getHours()).padStart(2, '0');
//   const minutes = String(now.getMinutes()).padStart(2, '0');
//   const seconds = String(now.getSeconds()).padStart(2, '0');

//   // 시계 업데이트
//   clock.textContent = `${hours}:${minutes}:${seconds}`;
// }

// // 1초마다 시계 업데이트 호출
// setInterval(updateClock, 1000);

// updateClock();