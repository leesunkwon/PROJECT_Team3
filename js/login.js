import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, doc, getDoc, collection } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBhhfQkeuxCSjcZ-71QLyUf84ic9AiwDT4",
    authDomain: "project-team3-d43ee.firebaseapp.com",
    databaseURL: "https://project-team3-d43ee-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-team3-d43ee",
    storageBucket: "project-team3-d43ee.appspot.com",
    messagingSenderId: "344314833740",
    appId: "1:344314833740:web:e0499ad9aba9ab880e3de9"
};



// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase 인증(Authentication) 서비스 초기화
const auth = getAuth(app);

// Firebase Firestore 서비스 초기화
const db = getFirestore(app);

// 사용자 로그인 후에 실행할 함수 정의
function handleLoginSuccess(user) {
    // 사용자의 데이터를 가져옴
    const userRef = doc(collection(db, 'users'), user.uid); // 수정된 부분
    
    getDoc(userRef).then((doc) => {
        if (doc.exists()) {
            const userData = doc.data();
            
            // 필드가 null인지 확인하고 페이지 이동
            if (userData.personal_color === null || userData.recommend_product === null || userData.skin_concern === null || userData.skin_type === null) {
                console.log('Some user data is missing. Redirecting to select1 page.');
                location.href = '/select1';
            } else {
                console.log('All user data is available. Redirecting to main page.');
                location.href = '/main';
            }
        } else {
            console.log('User document does not exist.');
        }
    }).catch((error) => {
        console.log('Error getting user document:', error);
    });
}

// 로그인 버튼 클릭 시 호출되는 함수
window.login = function (e) {
    e.preventDefault();

    var email = document.getElementById('exampleFormControlInput1').value;
    var password = document.getElementById('inputPassword5').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('로그인에 성공했습니다.');
            
            // 로그인 후에 사용자의 데이터 확인 및 처리 함수 호출
            handleLoginSuccess(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert("다시 입력해주세요.");
            document.querySelectorAll("input[class=form-control]")[0].value = null;
            document.querySelectorAll("input[class=form-control]")[1].value = null;
        });
}