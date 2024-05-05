//디비 삭제 후 auth 삭제

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, deleteUser } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

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

const user = firebase.auth().currentUser; //현재 유저의 UID


//auth에서 계정삭제
const deleteUser = deleteUse(user).then(() => {
    window.alert("회원탈퇴되셨습니다.");
}).catch((error) => {
    window.alert("회원탈퇴에 실패하셨습니다.");
});

//db에서 사용자 데이터 삭제
const deleteUserRelatedData = async(user) => {
    try {
    // 사용자의 데이터를 식별하여 삭제
        const userDocRef = firestore.collection('users').doc(user);
        await userDocRef.delete();

    // 기타 컬렉션에서 사용자와 관련된 데이터를 삭제할 수도 있습니다.
    // 예: await firestore.collection('posts').where('authorUid', '==', userUid).get().then(snapshot => { ... });

        console.log('사용자 데이터 삭제 완료');
    } catch (error) {
        console.error('사용자 데이터 삭제 중 에러 발생:', error);
    }
};

const delteOneUser = (user) => {
    deleteUser(user);
    deleteUserRelatedData(user);
};