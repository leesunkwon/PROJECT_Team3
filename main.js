var http = require("http"); // 기본적인 http 서버용 모듈 (Node.js 기본모듈)
var fs = require("fs"); // 파일시스템 모듈 (Node.js 기본모듈)
var url = require("url"); // url 객체화용 모듈 (Node.js 기본모듈)
var qs = require("querystring"); //url 객체의 query를 해석, 포맷팅하는 모듈 (Node.js 기본모듈)
var path = require("path"); // 경로 정보 보안용 모듈 (Node.js 기본모듈)
var sanitizeHTML = require("sanitize-html"); // XSS 방지를 위한 보안용 모듈

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  if (pathname == "/") {
  }

  response.writeHead(200);
  response.end();
});

app.listen(80);
