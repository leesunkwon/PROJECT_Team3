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

window.setting = async function (e) {
    const cosmetics = ['skin_care', 'sun_care'];  // , 'eye_liner', 'eye_shadow'
    const item = [];
    let what = cosmetics[Math.floor(Math.random() * cosmetics.length)] + Math.floor(Math.random() * 9);

    var img = document.getElementsByClassName("itemimg");
    var name = document.getElementsByClassName("itemFont");
    var brand = document.getElementsByClassName("itemFontMain");
    
    // 중복없이 화장품 불러오기
    while ((item.indexOf(what) == -1) && (item.length != 5)) {
        item.push(what);
        what = cosmetics[Math.floor(Math.random() * cosmetics.length)] + Math.floor(Math.random() * 9);
    }

    // html에 적용
    for (var i = 0; i < img.length; i++) {
        const docRef = await getDoc(doc(db, "items", item[i]));

        img[i].src = docRef.data().img;
        name[i].innerHTML = docRef.data().name;
        brand[i].innerHTML = docRef.data().brand;
    }
}