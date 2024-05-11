//express, 기본 Node.js 모듈
const express = require('express');
const app = express();
const port = 3000;

/*
const fs = require("fs"); // 파일시스템 모듈 (Node.js 기본모듈)
const sanitizeHTML = require("sanitize-html"); // XSS 방지를 위한 보안용 모듈
const path = require("path"); // 경로 정보 보안용 모듈 (Node.js 기본모듈)
const qs = require("querystring"); //url 객체의 query를 해석, 포맷팅하는 모듈 (Node.js 기본모듈)
const url = require("url"); // url 객체화용 모듈 (Node.js 기본모듈)
*/

app.use(express.static(__dirname));

// 로그인 화면
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/template/index.html');
});

// 회원가입 화면
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/template/join.html');
});

// 세부 항목 선택 화면
app.get('/select1', (req, res) => {
    res.sendFile(__dirname + '/template/select1.html');
});

// 메인 화면
app.get('/main', (req, res) => {
    // res.status(403).send("Access Forbidden");
    res.sendFile(__dirname + '/template/main.html');
});

// 세부 화면
app.get('/My.html', (req, res) => {
    res.sendFile(__dirname + '/template/My.html');
});
app.get('/SKINCARE.html', (req, res) => {
    res.sendFile(__dirname + '/template/SKINCARE.html');
});
app.get('/CLEANSING.html', (req, res) => {
    res.sendFile(__dirname + '/template/CLEANSING.html');
});
app.get('/MASK PACK.html', (req, res) => {
    res.sendFile(__dirname + '/template/MASK PACK.html');
});
app.get('/BASE.html', (req, res) => {
    res.sendFile(__dirname + '/template/BASE.html');
});
app.get('/LIP.html', (req, res) => {
    res.sendFile(__dirname + '/template/LIP.html');
});
app.get('/EYE.html', (req, res) => {
    res.sendFile(__dirname + '/template/EYE.html');
});
app.get('/SUN CARE.html', (req, res) => {
    res.sendFile(__dirname + '/template/SUN CARE.html');
});


app.listen(port, () => {
    console.log('서버 가동')
});