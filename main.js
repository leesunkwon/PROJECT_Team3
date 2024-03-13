//파이어베이스 모듈
const firebase = require("firebase");
const firebaseui = require("firebaseui");
const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//express, 기본 Node.js 모듈
const express = require("express");
const app = express();
const fs = require("fs"); // 파일시스템 모듈 (Node.js 기본모듈)
const sanitizeHTML = require("sanitize-html"); // XSS 방지를 위한 보안용 모듈
const path = require("path"); // 경로 정보 보안용 모듈 (Node.js 기본모듈)
const qs = require("querystring"); //url 객체의 query를 해석, 포맷팅하는 모듈 (Node.js 기본모듈)
const url = require("url"); // url 객체화용 모듈 (Node.js 기본모듈)

app.get("/", (req, res) => {
  return res.send("Project team 3 main page");
});

app.get("/page", (req, res) => {
  return res.send("/page");
});

app.listen(3000, () => {});
