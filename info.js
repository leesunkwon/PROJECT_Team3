// 페이지가 로드되면 버튼에 클릭 이벤트 리스너를 추가
window.onload = function() {
  document.querySelector('.back-button').addEventListener('click', function() {
      window.history.back();  // 브라우저 히스토리에서 이전 페이지로 이동
  });
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhhfQkeuxCSjcZ-71QLyUf84ic9AiwDT4",
  authDomain: "project-team3-d43ee.firebaseapp.com",
  databaseURL: "https://project-team3-d43ee-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-team3-d43ee",
  storageBucket: "project-team3-d43ee.appspot.com",
  messagingSenderId: "344314833740",
  appId: "1:344314833740:web:9a97233fae7650640e3de9"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);






const clickedCardId = sessionStorage.getItem('clickedCard');
console.log('Clicked card ID:', clickedCardId);



const db = firebase.firestore();



if (clickedCardId) {
    // 'items' 컬렉션에서 클릭된 카드의 ID에 해당하는 문서를 가져옴
    db.collection('items').doc(clickedCardId).get()
    .then((doc) => {
        if (doc.exists) {
            // 문서가 존재하는 경우 필드 값을 가져옴
            const data = doc.data();
            
            // 프로모션 컨테이너 요소를 가져옴
            const promotionContainer = document.querySelector('.promotion');
            
            // 이미지 컨테이너 요소를 가져와서 이미지를 설정
            const imageContainer = promotionContainer.querySelector('.image-container');
            const imgElement = document.createElement('img');
            imgElement.src = data.img;
            imgElement.alt = 'Product Image';
            imageContainer.appendChild(imgElement);
            
            // 텍스트 컨테이너 요소를 가져와서 데이터를 설정
            const textContainer = promotionContainer.querySelector('.text-container');
            textContainer.querySelector('h1').textContent = data.name; // 상품명
            textContainer.querySelector('h2').textContent = data.brand; // 브랜드
            textContainer.querySelector('.description').textContent = data.tag; // 태그
            
            // 바로 구매하기 버튼에 이벤트 리스너 추가
            // 바로 구매하기 버튼에 클릭 이벤트 리스너 추가
const exploreButton = textContainer.querySelector('.explore-button');
exploreButton.addEventListener('click', function() {
    // 클릭된 카드의 링크를 가져와서 해당 링크로 이동
    const link = data.link;
    window.location.href = link;
});
            
        } else {
            console.log('No such document!');
        }
    })
    .catch((error) => {
        console.log('Error getting document:', error);
    });
} else {
    console.log('No card clicked');
}




