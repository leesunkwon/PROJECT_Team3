const express = require('express');
const app = express();
const port = 3000;

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
app.get('/select2', (req, res) => {
    res.sendFile(__dirname + '/template/select2.html');
});
app.get('/select3', (req, res) => {
    res.sendFile(__dirname + '/template/select3.html');
});

app.listen(port, () => {
    console.log('서버 가동')
});