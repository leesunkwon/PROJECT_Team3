// 페이지가 로드되면 버튼에 클릭 이벤트 리스너를 추가
window.onload = function() {
  document.querySelector('.back-button').addEventListener('click', function() {
      window.history.back();  // 브라우저 히스토리에서 이전 페이지로 이동
  });
};
