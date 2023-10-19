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
        
          // 초기 로드 시 시계 업데이트 호출
          updateClock();