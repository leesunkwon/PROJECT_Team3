import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

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

window.userData = async function () {
    // 사용자 정보 가져오기
    onAuthStateChanged(auth, async (user) => {
        const uid = user.uid;

        const docRef2 = await getDoc(doc(db, "users", uid));

        document.getElementById('name').innerText = "이름 : " + docRef2.data().name;
        document.getElementById('email').innerText = "이메일 : " + docRef2.data().email;
        document.getElementById('skin_type').innerText = "피부타입 : " + docRef2.data().skin_type;
        document.getElementById('skin_concern').innerText = "피부고민 : " + docRef2.data().skin_concern;
        document.getElementById('personal_color').innerText = "퍼스널 컬러 : " + docRef2.data().personal_color;
    });
}