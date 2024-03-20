const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.listen(3000, () => { });

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
initializeApp();
const db = getFirestore();
async function new_people() {
    const id = document.getElementById('id');
    const password = document.getElementById('password');

    const newRef = db.collection('users').doc(id);
    await newRef.set({
        id: id,
        password: password
    });
    console.log("회원가입 성공");
};

// app.use('/script', express.static(__dirname + '/script'));
