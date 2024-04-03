import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

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


// 비밀번호 일치 여부 검사
window.password_check = function (e) {

    var pw1 = document.getElementById('inputPassword5').value;
    var pw2 = document.getElementById('inputPasswordCheck').value;

    if (pw2 == '') {
        document.getElementById('pwConfirm').innerText = '';
    } else if (pw1 == pw2) {
        document.getElementById('pwConfirm').innerText = '일치'
        return true;
    } else {
        document.getElementById('pwConfirm').innerText = '불일치'
        return false;
    }
}

window.signUp = function (e) {
    e.preventDefault();

    var name = document.getElementById('exampleFormControlInput1').value;
    var sex = document.querySelector('label[for="' + document.querySelector('input[name="btnradio"]:checked').id + '"]').textContent;
    var email = document.getElementById('exampleFormControlInput2').value;
    var password = document.getElementById('inputPasswordCheck').value;

    if (validate_email(email) == false || validate_field(name) == false || password_check() == false) {
        alert('다시 확인하세요.');
    } else {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;

                await setDoc(doc(db, "users", user.uid), {
                    name: name,
                    sex: sex,
                    email: email,
                    personal_color: null,
                    skin_type: null
                }).then(() => {
                    window.location.href = '/'
                });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
}

// 이메일 유효성 검사
function validate_email(email) {
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

    if (pattern.test(email) === true) {
        return true;  // 정상 이메일
    } else {
        return false;
    }
}

// 이름 빈칸 검사
function validate_field(field) {
    if (field == null) {
        return false;
    }
    if (field <= 0) {
        return false;
    } else {
        return true;
    }
}

// 비밀번호 6자리 이상 검사
// function validate_password(password) {
//     if (password < 6) {
//         return false;
//     } else {
//         return true;
//     }
// }