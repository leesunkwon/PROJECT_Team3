import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

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


// 자신의 피부타입 선택(2 - 3개)
window.select1 = function (e) {
    const auth = getAuth();
    // onAuthStateChanged(auth, async (user) => {
    //     if (user) {
    //         const uid = user.uid;
    //         var skin_type;

    //         await updateDoc(doc(db, "users", uid), {
    //             skin_type: skin_type
    //         }).then(() => {
    //             window.location.href = '/select2'
    //         });
    //     } else {
    //         alert('사용자를 알 수 없습니다.');
    //         window.location.href = '/'
    //     }
    // });
    window.location.href = '/select2'
}

window.select2 = function(e) {
    window.location.href = '/select3'
}

window.select3 = function(e) {
    window.location.href = '/main'
}
