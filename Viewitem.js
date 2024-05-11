// 페이지가 로드되면 버튼에 클릭 이벤트 리스너를 추가
window.onload = function() {
  document.querySelector('.back-button').addEventListener('click', function() {
      window.history.back();  // 브라우저 히스토리에서 이전 페이지로 이동
  });
};




document.addEventListener('DOMContentLoaded', function () {
  // 각 카드 요소들을 가져옴
  const cards = document.querySelectorAll('.card');
  
  // 각 카드에 클릭 이벤트를 추가
  cards.forEach(card => {
      card.addEventListener('click', function () {
          // 클릭된 카드의 ID 값을 저장
          sessionStorage.setItem('clickedCard', card.id);

          // info.html 페이지로 이동
          window.location.href = 'info.html';
         
      });
  });
});