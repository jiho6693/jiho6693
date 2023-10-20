const mainImage = document.getElementById('mainImage');
let originalImage = 'JIHO.gif';

// 이미지 변경 함수
function changeImage(newImage) {
    mainImage.src = newImage;
}

// 이미지 리셋 함수
function resetImage() {
    mainImage.src = originalImage;
}

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

function createRain() {
    var rainContainer = document.createElement("div");
    rainContainer.id = "rain";
    for (var i = 0; i < 60; i++) {
        var drop = document.createElement("div");
        drop.className = "drop";
        drop.style.left = Math.random() * 100 + "%";
        drop.style.animationDuration = (1 + Math.random() * 2) + "s";
        rainContainer.appendChild(drop);
    }

    // Add the rain container to the body
    document.body.appendChild(rainContainer);
}

// 초기 로드 시 시계 업데이트와 비 생성 함수 호출
updateClock();
createRain();
</script>

<style>
/* Style for raindrops */
.drop {
    position: absolute;
    width: 2px;
    height: 15px;
    background-color: blue;
    animation: fall linear infinite;
}

@keyframes fall {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(100vh);
    }
}