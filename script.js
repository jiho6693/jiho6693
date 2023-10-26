window.addEventListener("scroll", function () {
  const category1 = document.getElementsByClassName("category1")[0]; // Select the first element with class "category1"
  const scrollY = window.scrollY;

  // Define a scroll threshold (adjust the value as needed)
  const scrollThreshold = 10;

  if (scrollY > scrollThreshold) {
    // Hide the "category1" div by adding a CSS class
    category1.classList.add("hidden");
  } else {
    // Show the "category1" div by removing the CSS class
    category1.classList.remove("hidden");
  }
});


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

function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();

  // 시, 분, 초 추출
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // 시계 업데이트
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// 1초마다 시계 업데이트 호출
setInterval(updateClock, 1000);

updateClock();