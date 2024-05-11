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

let type = ['건성', '지성', '복합성', '여드름성', '민감성',
    '각질', '피지/블랙헤드', '모공', '미백/잡티', '주름/탄력', '해당없음',
    '스킨케어', '선케어', '팩', '베이스', '색조 화장', '클렌징',
    '봄웜', '여름쿨', '가을웜', '겨울쿨'
];

window.data = async function (selectedItems) {
    let set = [];  // 피부타입, 고민, 추천제품, 퍼스널 컬러
    for (let d in selectedItems) {
        let num = Number(selectedItems[d].replace('item', ''));
        set.push(type[num - 1]);
    }

    onAuthStateChanged(auth, async (user) => {
        const uid = user.uid;

        const washingtonRef = doc(db, "users", uid);

        await updateDoc(washingtonRef, {
            personal_color: set[3],
            recommend_product: set[2],
            skin_concern: set[1],
            skin_type: set[0]
        }).then(() => {
            window.location.href = '/main'
        });
    });
}