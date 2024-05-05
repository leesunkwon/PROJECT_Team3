import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBhhfQkeuxCSjcZ-71QLyUf84ic9AiwDT4",
    authDomain: "project-team3-d43ee.firebaseapp.com",
    databaseURL: "https://project-team3-d43ee-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-team3-d43ee",
    storageBucket: "project-team3-d43ee.appspot.com",
    messagingSenderId: "344314833740",
    appId: "1:344314833740:web:e0499ad9aba9ab880e3de9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

window.logout = function (e) {
    // 로그인한 유저 확인
    onAuthStateChanged(auth, (user) => {
        const uid = user.uid;
        signOut(auth)
            .then(() => {
                alert("로그아웃합니다.");
                location.href = '/';
            })
            .catch((error) => {
                alert("로그아웃을 실패하였습니다.");
            });
    });
}