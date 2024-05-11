//디비 삭제 후 auth 삭제

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, deleteUser, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

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
const auth = getAuth();
const db = getFirestore();
const user = auth.currentUser;

window.userDelete = function (e) {
    //db에서 사용자 정보 삭제
    onAuthStateChanged(auth, async (user) => {
        const uid = user.uid;
        const docRef2 = await deleteDoc(doc(db, "users", uid));
        console.log("탈퇴");

        deleteUser(user).then(() => {
            console.log("탈퇴완료")
            location.href = '/'
        }).catch((error) => {
            console.log("오류");
        });
    });

    document.getElementById('userDelete').addEventListener('click', onAuthStateChanged);
}