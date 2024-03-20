import { initializeApp } from "firebase/app";
import {
  getAuth, //authentication 설정
  createUserWithEmailAndPassword, //email 회원가입
  signInWithEmailAndPassword, //email 로그인
  signInWithPopup, //구글 로그인을 팝업창에 띄우기 위해
  GoogleAuthProvider, //구글 로그인 기능
} from "firebase/auth";

const firebaseConfig = {
  //앱 환경설정
  apiKey: "AIzaSyBhhfQkeuxCSjcZ-71QLyUf84ic9AiwDT4",
  authDomain: "project-team3-d43ee.firebaseapp.com",
  projectId: "project-team3-d43ee",
  storageBucket: "project-team3-d43ee.appspot.com",
  messagingSenderId: "344314833740",
  appId: "1:344314833740:web:e0499ad9aba9ab880e3de9",
  measurementId: "G-FE3NFKSBVD",
};

const auth = getAuth(app); //환경 변수를 받아서 앱으로
const database = firebase.database();

const app = initializeApp(firebaseConfig); //파이어베이스 앱 사용

function register() {
  email = document.getElementById(email).value;
  password = document.getElementById(password).value;
}

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
