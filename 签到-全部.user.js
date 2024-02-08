// ==UserScript==
// @name         签到
// @namespace    http://tampermonkey.net/
// @version      全部
// @description  签到
// @author       源殇
// @match        https://*/user/*
// @icon         https://yuanshang000.github.io/QianDao/签到图标/favicon.ico
// @grant        none
// ==/UserScript==
(function() {
'use strict';
// Your code here...
function qiandao1() {  //每日签到
var allElements = document.getElementsByTagName("*");
for (var i = 0; i < allElements.length; i++) {
if (allElements[i].textContent.includes("每日签到")) {
allElements[i].click();
}
}
}

   function openCustomWindow(content) {
        // 创建自定义窗口的元素
        var customWindow = document.createElement("div");
        customWindow.id = "custom-window";
        customWindow.innerHTML = "<p>" + content + "</p>";

        // 设置自定义窗口的样式
        customWindow.style.position = "fixed";
        customWindow.style.top = "50%";
        customWindow.style.left = "50%";
        customWindow.style.transform = "translate(-50%, -50%)";
        customWindow.style.padding = "20px";
        customWindow.style.backgroundColor = "#fff";
        customWindow.style.border = "1px solid #ccc";
        customWindow.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

        // 将自定义窗口添加到页面
        document.body.appendChild(customWindow);

        // 延时3秒后自动关闭自定义窗口
        setTimeout(function() {
            closeCustomWindow(customWindow);
        }, 3000);
    }

    function closeCustomWindow(windowElement) {
        // 移除自定义窗口
        if (windowElement) {
            windowElement.parentNode.removeChild(windowElement);
        }
    }
//=================================================================================



function b__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(b__B, 2000);

}

function b__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第1个   b");
setTimeout(function() {

window.location.href = "https://sx0.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sx0__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sx0__B, 2000);

}

function sx0__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第2个   sx0");
setTimeout(function() {

window.location.href = "https://dc0.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dc0__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dc0__B, 2000);

}

function dc0__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第3个   dc0");
setTimeout(function() {

window.location.href = "https://xs0.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xs0__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xs0__B, 2000);

}

function xs0__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第4个   xs0");
setTimeout(function() {

window.location.href = "https://wzj0.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function wzj0__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(wzj0__B, 2000);

}

function wzj0__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第5个   wzj0");
setTimeout(function() {

window.location.href = "https://sb0.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sb0__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sb0__B, 2000);

}

function sb0__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第6个   sb0");
setTimeout(function() {

window.location.href = "https://yyh0.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function yyh0__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(yyh0__B, 2000);

}

function yyh0__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第7个   yyh0");
setTimeout(function() {

window.location.href = "https://zgl0.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function zgl0__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(zgl0__B, 2000);

}

function zgl0__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第8个   zgl0");
setTimeout(function() {

window.location.href = "https://shoucan00.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function shoucan00__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(shoucan00__B, 2000);

}

function shoucan00__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第9个   shoucan00");
setTimeout(function() {

window.location.href = "https://xq0.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xq0__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xq0__B, 2000);

}

function xq0__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第10个   xq0");
setTimeout(function() {

window.location.href = "https://dq0.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dq0__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dq0__B, 2000);

}

function dq0__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第11个   dq0");
setTimeout(function() {

window.location.href = "https://gsl0.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function gsl0__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(gsl0__B, 2000);

}

function gsl0__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第12个   gsl0");
setTimeout(function() {

window.location.href = "https://sgwe0.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sgwe0__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sgwe0__B, 2000);

}

function sgwe0__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第13个   sgwe0");
setTimeout(function() {

window.location.href = "https://sx9.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sx9__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sx9__B, 2000);

}

function sx9__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第14个   sx9");
setTimeout(function() {

window.location.href = "https://dc9.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dc9__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dc9__B, 2000);

}

function dc9__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第15个   dc9");
setTimeout(function() {

window.location.href = "https://xs9.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xs9__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xs9__B, 2000);

}

function xs9__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第16个   xs9");
setTimeout(function() {

window.location.href = "https://wzj9.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function wzj9__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(wzj9__B, 2000);

}

function wzj9__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第17个   wzj9");
setTimeout(function() {

window.location.href = "https://yyh9.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function yyh9__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(yyh9__B, 2000);

}

function yyh9__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第18个   yyh9");
setTimeout(function() {

window.location.href = "https://zgl9.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function zgl9__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(zgl9__B, 2000);

}

function zgl9__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第19个   zgl9");
setTimeout(function() {

window.location.href = "https://xq9.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xq9__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xq9__B, 2000);

}

function xq9__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第20个   xq9");
setTimeout(function() {

window.location.href = "https://sb1.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sb1__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sb1__B, 2000);

}

function sb1__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第21个   sb1");
setTimeout(function() {

window.location.href = "https://dq9.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dq9__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dq9__B, 2000);

}

function dq9__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第22个   dq9");
setTimeout(function() {

window.location.href = "https://shoucan01.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function shoucan01__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(shoucan01__B, 2000);

}

function shoucan01__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第23个   shoucan01");
setTimeout(function() {

window.location.href = "https://gsl9.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function gsl9__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(gsl9__B, 2000);

}

function gsl9__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第24个   gsl9");
setTimeout(function() {

window.location.href = "https://sgwe9.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sgwe9__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sgwe9__B, 2000);

}

function sgwe9__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第25个   sgwe9");
setTimeout(function() {

window.location.href = "https://sx7.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sx7__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sx7__B, 2000);

}

function sx7__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第26个   sx7");
setTimeout(function() {

window.location.href = "https://dc7.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dc7__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dc7__B, 2000);

}

function dc7__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第27个   dc7");
setTimeout(function() {

window.location.href = "https://xs7.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xs7__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xs7__B, 2000);

}

function xs7__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第28个   xs7");
setTimeout(function() {

window.location.href = "https://wzj7.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function wzj7__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(wzj7__B, 2000);

}

function wzj7__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第29个   wzj7");
setTimeout(function() {

window.location.href = "https://sb2.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sb2__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sb2__B, 2000);

}

function sb2__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第30个   sb2");
setTimeout(function() {

window.location.href = "https://yyh7.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function yyh7__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(yyh7__B, 2000);

}

function yyh7__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第31个   yyh7");
setTimeout(function() {

window.location.href = "https://zgl7.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function zgl7__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(zgl7__B, 2000);

}

function zgl7__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第32个   zgl7");
setTimeout(function() {

window.location.href = "https://xq7.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xq7__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xq7__B, 2000);

}

function xq7__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第33个   xq7");
setTimeout(function() {

window.location.href = "https://shoucan02.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function shoucan02__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(shoucan02__B, 2000);

}

function shoucan02__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第34个   shoucan02");
setTimeout(function() {

window.location.href = "https://dq7.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dq7__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dq7__B, 2000);

}

function dq7__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第35个   dq7");
setTimeout(function() {

window.location.href = "https://gsl7.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function gsl7__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(gsl7__B, 2000);

}

function gsl7__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第36个   gsl7");
setTimeout(function() {

window.location.href = "https://sgwe7.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sgwe7__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sgwe7__B, 2000);

}

function sgwe7__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第37个   sgwe7");
setTimeout(function() {

window.location.href = "https://sx8.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sx8__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sx8__B, 2000);

}

function sx8__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第38个   sx8");
setTimeout(function() {

window.location.href = "https://sb3.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sb3__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sb3__B, 2000);

}

function sb3__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第39个   sb3");
setTimeout(function() {

window.location.href = "https://dc8.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dc8__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dc8__B, 2000);

}

function dc8__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第40个   dc8");
setTimeout(function() {

window.location.href = "https://xs8.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xs8__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xs8__B, 2000);

}

function xs8__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第41个   xs8");
setTimeout(function() {

window.location.href = "https://wzj8.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function wzj8__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(wzj8__B, 2000);

}

function wzj8__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第42个   wzj8");
setTimeout(function() {

window.location.href = "https://yyh8.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function yyh8__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(yyh8__B, 2000);

}

function yyh8__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第43个   yyh8");
setTimeout(function() {

window.location.href = "https://zgl8.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function zgl8__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(zgl8__B, 2000);

}

function zgl8__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第44个   zgl8");
setTimeout(function() {

window.location.href = "https://shoucan03.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function shoucan03__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(shoucan03__B, 2000);

}

function shoucan03__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第45个   shoucan03");
setTimeout(function() {

window.location.href = "https://xq8.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xq8__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xq8__B, 2000);

}

function xq8__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第46个   xq8");
setTimeout(function() {

window.location.href = "https://dq8.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dq8__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dq8__B, 2000);

}

function dq8__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第47个   dq8");
setTimeout(function() {

window.location.href = "https://gsl8.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function gsl8__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(gsl8__B, 2000);

}

function gsl8__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第48个   gsl8");
setTimeout(function() {

window.location.href = "https://sgwe8.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sgwe8__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sgwe8__B, 2000);

}

function sgwe8__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第49个   sgwe8");
setTimeout(function() {

window.location.href = "https://sx4.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sx4__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sx4__B, 2000);

}

function sx4__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第50个   sx4");
setTimeout(function() {

window.location.href = "https://dc4.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dc4__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dc4__B, 2000);

}

function dc4__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第51个   dc4");
setTimeout(function() {

window.location.href = "https://xs4.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xs4__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xs4__B, 2000);

}

function xs4__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第52个   xs4");
setTimeout(function() {

window.location.href = "https://sb4.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sb4__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sb4__B, 2000);

}

function sb4__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第53个   sb4");
setTimeout(function() {

window.location.href = "https://wzj4.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function wzj4__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(wzj4__B, 2000);

}

function wzj4__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第54个   wzj4");
setTimeout(function() {

window.location.href = "https://yyh4.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function yyh4__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(yyh4__B, 2000);

}

function yyh4__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第55个   yyh4");
setTimeout(function() {

window.location.href = "https://zgl4.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function zgl4__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(zgl4__B, 2000);

}

function zgl4__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第56个   zgl4");
setTimeout(function() {

window.location.href = "https://shoucan04.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function shoucan04__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(shoucan04__B, 2000);

}

function shoucan04__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第57个   shoucan04");
setTimeout(function() {

window.location.href = "https://xq4.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xq4__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xq4__B, 2000);

}

function xq4__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第58个   xq4");
setTimeout(function() {

window.location.href = "https://dq4.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dq4__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dq4__B, 2000);

}

function dq4__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第59个   dq4");
setTimeout(function() {

window.location.href = "https://gsl4.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function gsl4__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(gsl4__B, 2000);

}

function gsl4__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第60个   gsl4");
setTimeout(function() {

window.location.href = "https://sgwe4.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sgwe4__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sgwe4__B, 2000);

}

function sgwe4__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第61个   sgwe4");
setTimeout(function() {

window.location.href = "https://sx6.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sx6__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sx6__B, 2000);

}

function sx6__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第62个   sx6");
setTimeout(function() {

window.location.href = "https://dc6.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dc6__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dc6__B, 2000);

}

function dc6__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第63个   dc6");
setTimeout(function() {

window.location.href = "https://sb5.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sb5__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sb5__B, 2000);

}

function sb5__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第64个   sb5");
setTimeout(function() {

window.location.href = "https://xs6.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xs6__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xs6__B, 2000);

}

function xs6__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第65个   xs6");
setTimeout(function() {

window.location.href = "https://wzj6.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function wzj6__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(wzj6__B, 2000);

}

function wzj6__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第66个   wzj6");
setTimeout(function() {

window.location.href = "https://shoucan05.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function shoucan05__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(shoucan05__B, 2000);

}

function shoucan05__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第67个   shoucan05");
setTimeout(function() {

window.location.href = "https://yyh6.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function yyh6__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(yyh6__B, 2000);

}

function yyh6__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第68个   yyh6");
setTimeout(function() {

window.location.href = "https://zgl6.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function zgl6__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(zgl6__B, 2000);

}

function zgl6__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第69个   zgl6");
setTimeout(function() {

window.location.href = "https://xq6.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xq6__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xq6__B, 2000);

}

function xq6__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第70个   xq6");
setTimeout(function() {

window.location.href = "https://dq6.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dq6__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dq6__B, 2000);

}

function dq6__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第71个   dq6");
setTimeout(function() {

window.location.href = "https://gsl6.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function gsl6__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(gsl6__B, 2000);

}

function gsl6__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第72个   gsl6");
setTimeout(function() {

window.location.href = "https://sgwe6.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sgwe6__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sgwe6__B, 2000);

}

function sgwe6__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第73个   sgwe6");
setTimeout(function() {

window.location.href = "https://sx2.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sx2__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sx2__B, 2000);

}

function sx2__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第74个   sx2");
setTimeout(function() {

window.location.href = "https://dc2.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dc2__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dc2__B, 2000);

}

function dc2__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第75个   dc2");
setTimeout(function() {

window.location.href = "https://sb6.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sb6__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sb6__B, 2000);

}

function sb6__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第76个   sb6");
setTimeout(function() {

window.location.href = "https://xs2.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xs2__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xs2__B, 2000);

}

function xs2__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第77个   xs2");
setTimeout(function() {

window.location.href = "https://wzj2.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function wzj2__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(wzj2__B, 2000);

}

function wzj2__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第78个   wzj2");
setTimeout(function() {

window.location.href = "https://yyh2.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function yyh2__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(yyh2__B, 2000);

}

function yyh2__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第79个   yyh2");
setTimeout(function() {

window.location.href = "https://shoucan06.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function shoucan06__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(shoucan06__B, 2000);

}

function shoucan06__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第80个   shoucan06");
setTimeout(function() {

window.location.href = "https://zgl2.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function zgl2__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(zgl2__B, 2000);

}

function zgl2__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第81个   zgl2");
setTimeout(function() {

window.location.href = "https://xq2.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xq2__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xq2__B, 2000);

}

function xq2__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第82个   xq2");
setTimeout(function() {

window.location.href = "https://dq2.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dq2__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dq2__B, 2000);

}

function dq2__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第83个   dq2");
setTimeout(function() {

window.location.href = "https://gsl2.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function gsl2__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(gsl2__B, 2000);

}

function gsl2__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第84个   gsl2");
setTimeout(function() {

window.location.href = "https://sgwe2.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sgwe2__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sgwe2__B, 2000);

}

function sgwe2__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第85个   sgwe2");
setTimeout(function() {

window.location.href = "https://sx5.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sx5__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sx5__B, 2000);

}

function sx5__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第86个   sx5");
setTimeout(function() {

window.location.href = "https://dc5.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dc5__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dc5__B, 2000);

}

function dc5__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第87个   dc5");
setTimeout(function() {

window.location.href = "https://sb7.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sb7__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sb7__B, 2000);

}

function sb7__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第88个   sb7");
setTimeout(function() {

window.location.href = "https://xs5.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xs5__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xs5__B, 2000);

}

function xs5__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第89个   xs5");
setTimeout(function() {

window.location.href = "https://wzj5.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function wzj5__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(wzj5__B, 2000);

}

function wzj5__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第90个   wzj5");
setTimeout(function() {

window.location.href = "https://shoucan07.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function shoucan07__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(shoucan07__B, 2000);

}

function shoucan07__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第91个   shoucan07");
setTimeout(function() {

window.location.href = "https://yyh5.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function yyh5__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(yyh5__B, 2000);

}

function yyh5__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第92个   yyh5");
setTimeout(function() {

window.location.href = "https://zgl5.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function zgl5__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(zgl5__B, 2000);

}

function zgl5__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第93个   zgl5");
setTimeout(function() {

window.location.href = "https://xq5.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xq5__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xq5__B, 2000);

}

function xq5__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第94个   xq5");
setTimeout(function() {

window.location.href = "https://dq5.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dq5__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dq5__B, 2000);

}

function dq5__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第95个   dq5");
setTimeout(function() {

window.location.href = "https://gsl5.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function gsl5__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(gsl5__B, 2000);

}

function gsl5__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第96个   gsl5");
setTimeout(function() {

window.location.href = "https://sgwe5.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sgwe5__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sgwe5__B, 2000);

}

function sgwe5__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第97个   sgwe5");
setTimeout(function() {

window.location.href = "https://sx1.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sx1__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sx1__B, 2000);

}

function sx1__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第98个   sx1");
setTimeout(function() {

window.location.href = "https://dc1.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dc1__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dc1__B, 2000);

}

function dc1__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第99个   dc1");
setTimeout(function() {

window.location.href = "https://sb8.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sb8__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sb8__B, 2000);

}

function sb8__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第100个   sb8");
setTimeout(function() {

window.location.href = "https://xs1.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xs1__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xs1__B, 2000);

}

function xs1__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第101个   xs1");
setTimeout(function() {

window.location.href = "https://wzj1.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function wzj1__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(wzj1__B, 2000);

}

function wzj1__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第102个   wzj1");
setTimeout(function() {

window.location.href = "https://shoucan08.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function shoucan08__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(shoucan08__B, 2000);

}

function shoucan08__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第103个   shoucan08");
setTimeout(function() {

window.location.href = "https://yyh1.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function yyh1__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(yyh1__B, 2000);

}

function yyh1__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第104个   yyh1");
setTimeout(function() {

window.location.href = "https://zgl1.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function zgl1__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(zgl1__B, 2000);

}

function zgl1__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第105个   zgl1");
setTimeout(function() {

window.location.href = "https://xq1.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xq1__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xq1__B, 2000);

}

function xq1__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第106个   xq1");
setTimeout(function() {

window.location.href = "https://dq1.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dq1__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dq1__B, 2000);

}

function dq1__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第107个   dq1");
setTimeout(function() {

window.location.href = "https://gsl1.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function gsl1__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(gsl1__B, 2000);

}

function gsl1__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第108个   gsl1");
setTimeout(function() {

window.location.href = "https://sgwe1.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sgwe1__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sgwe1__B, 2000);

}

function sgwe1__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第109个   sgwe1");
setTimeout(function() {

window.location.href = "https://sx3.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sx3__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sx3__B, 2000);

}

function sx3__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第110个   sx3");
setTimeout(function() {

window.location.href = "https://dc3.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dc3__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dc3__B, 2000);

}

function dc3__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第111个   dc3");
setTimeout(function() {

window.location.href = "https://sb9.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sb9__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sb9__B, 2000);

}

function sb9__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第112个   sb9");
setTimeout(function() {

window.location.href = "https://xs3.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xs3__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xs3__B, 2000);

}

function xs3__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第113个   xs3");
setTimeout(function() {

window.location.href = "https://wzj3.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function wzj3__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(wzj3__B, 2000);

}

function wzj3__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第114个   wzj3");
setTimeout(function() {

window.location.href = "https://shoucan09.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function shoucan09__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(shoucan09__B, 2000);

}

function shoucan09__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第115个   shoucan09");
setTimeout(function() {

window.location.href = "https://yyh3.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function yyh3__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(yyh3__B, 2000);

}

function yyh3__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第116个   yyh3");
setTimeout(function() {

window.location.href = "https://zgl3.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function zgl3__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(zgl3__B, 2000);

}

function zgl3__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第117个   zgl3");
setTimeout(function() {

window.location.href = "https://xq3.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function xq3__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(xq3__B, 2000);

}

function xq3__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第118个   xq3");
setTimeout(function() {

window.location.href = "https://dq3.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function dq3__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(dq3__B, 2000);

}

function dq3__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第119个   dq3");
setTimeout(function() {

window.location.href = "https://gsl3.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function gsl3__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(gsl3__B, 2000);

}

function gsl3__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第120个   gsl3");
setTimeout(function() {

window.location.href = "https://sgwe3.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sgwe3__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sgwe3__B, 2000);

}

function sgwe3__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第121个   sgwe3");
setTimeout(function() {

window.location.href = "https://sbgly.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function sbgly__A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(sbgly__B, 2000);

}


function sbgly__B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第122个   sbgly");
setTimeout(function() {

window.location.href = "https://ys01.veay.cn/user";

}, 2000);

}, 2000);
}

}

}, 2000);

}

function __A(){

var qiandaoElements = document.querySelectorAll("#qiandao");

for (var i = 0; i < qiandaoElements.length; i++) {

qiandaoElements[i].click();

}

setTimeout(__B, 2000);

}


function __B() {

setTimeout(function() {

var allElements1 = document.getElementsByTagName("*");

for (var i = 0; i < allElements1.length; i++) {

if (allElements1[i].textContent.includes("确定")) {

allElements1[i].click();

setTimeout(function(){
openCustomWindow("第123个   163418226901");


}, 2000);
}

}

}, 2000);

}










//==============================================================================

if(window.location.href=="https://b.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://b.veay.cn/user/qiandao.php"){

b__A();

}

if(window.location.href=="https://sx0.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sx0";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sx0.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sx0.veay.cn/user/qiandao.php"){

sx0__A();

}

if(window.location.href=="https://dc0.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dc0";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dc0.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dc0.veay.cn/user/qiandao.php"){

dc0__A();

}

if(window.location.href=="https://xs0.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xs0";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xs0.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xs0.veay.cn/user/qiandao.php"){

xs0__A();

}

if(window.location.href=="https://wzj0.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "wzj0";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://wzj0.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://wzj0.veay.cn/user/qiandao.php"){

wzj0__A();

}

if(window.location.href=="https://sb0.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sb0";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sb0.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sb0.veay.cn/user/qiandao.php"){

sb0__A();

}

if(window.location.href=="https://yyh0.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "yyh0";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://yyh0.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://yyh0.veay.cn/user/qiandao.php"){

yyh0__A();

}

if(window.location.href=="https://zgl0.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "zgl0";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://zgl0.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://zgl0.veay.cn/user/qiandao.php"){

zgl0__A();

}

if(window.location.href=="https://shoucan00.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "shoucan00";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://shoucan00.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://shoucan00.veay.cn/user/qiandao.php"){

shoucan00__A();

}

if(window.location.href=="https://xq0.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xq0";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xq0.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xq0.veay.cn/user/qiandao.php"){

xq0__A();

}

if(window.location.href=="https://dq0.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dq0";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dq0.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dq0.veay.cn/user/qiandao.php"){

dq0__A();

}

if(window.location.href=="https://gsl0.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "gsl0";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://gsl0.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://gsl0.veay.cn/user/qiandao.php"){

gsl0__A();

}

if(window.location.href=="https://sgwe0.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sgwe0";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sgwe0.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sgwe0.veay.cn/user/qiandao.php"){

sgwe0__A();

}

if(window.location.href=="https://sx9.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sx9";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sx9.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sx9.veay.cn/user/qiandao.php"){

sx9__A();

}

if(window.location.href=="https://dc9.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dc9";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dc9.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dc9.veay.cn/user/qiandao.php"){

dc9__A();

}

if(window.location.href=="https://xs9.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xs9";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xs9.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xs9.veay.cn/user/qiandao.php"){

xs9__A();

}

if(window.location.href=="https://wzj9.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "wzj9";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://wzj9.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://wzj9.veay.cn/user/qiandao.php"){

wzj9__A();

}

if(window.location.href=="https://yyh9.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "yyh9";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://yyh9.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://yyh9.veay.cn/user/qiandao.php"){

yyh9__A();

}

if(window.location.href=="https://zgl9.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "zgl9";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://zgl9.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://zgl9.veay.cn/user/qiandao.php"){

zgl9__A();

}

if(window.location.href=="https://xq9.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xq9";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xq9.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xq9.veay.cn/user/qiandao.php"){

xq9__A();

}

if(window.location.href=="https://sb1.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sb1";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sb1.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sb1.veay.cn/user/qiandao.php"){

sb1__A();

}

if(window.location.href=="https://dq9.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dq9";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dq9.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dq9.veay.cn/user/qiandao.php"){

dq9__A();

}

if(window.location.href=="https://shoucan01.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "shoucan01";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://shoucan01.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://shoucan01.veay.cn/user/qiandao.php"){

shoucan01__A();

}

if(window.location.href=="https://gsl9.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "gsl9";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://gsl9.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://gsl9.veay.cn/user/qiandao.php"){

gsl9__A();

}

if(window.location.href=="https://sgwe9.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sgwe9";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sgwe9.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sgwe9.veay.cn/user/qiandao.php"){

sgwe9__A();

}

if(window.location.href=="https://sx7.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sx7";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sx7.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sx7.veay.cn/user/qiandao.php"){

sx7__A();

}

if(window.location.href=="https://dc7.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dc7";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dc7.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dc7.veay.cn/user/qiandao.php"){

dc7__A();

}

if(window.location.href=="https://xs7.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xs7";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xs7.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xs7.veay.cn/user/qiandao.php"){

xs7__A();

}

if(window.location.href=="https://wzj7.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "wzj7";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://wzj7.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://wzj7.veay.cn/user/qiandao.php"){

wzj7__A();

}

if(window.location.href=="https://sb2.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sb2";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sb2.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sb2.veay.cn/user/qiandao.php"){

sb2__A();

}

if(window.location.href=="https://yyh7.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "yyh7";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://yyh7.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://yyh7.veay.cn/user/qiandao.php"){

yyh7__A();

}

if(window.location.href=="https://zgl7.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "zgl7";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://zgl7.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://zgl7.veay.cn/user/qiandao.php"){

zgl7__A();

}

if(window.location.href=="https://xq7.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xq7";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xq7.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xq7.veay.cn/user/qiandao.php"){

xq7__A();

}

if(window.location.href=="https://shoucan02.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "shoucan02";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://shoucan02.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://shoucan02.veay.cn/user/qiandao.php"){

shoucan02__A();

}

if(window.location.href=="https://dq7.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dq7";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dq7.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dq7.veay.cn/user/qiandao.php"){

dq7__A();

}

if(window.location.href=="https://gsl7.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "gsl7";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://gsl7.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://gsl7.veay.cn/user/qiandao.php"){

gsl7__A();

}

if(window.location.href=="https://sgwe7.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sgwe7";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sgwe7.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sgwe7.veay.cn/user/qiandao.php"){

sgwe7__A();

}

if(window.location.href=="https://sx8.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sx8";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sx8.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sx8.veay.cn/user/qiandao.php"){

sx8__A();

}

if(window.location.href=="https://sb3.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sb3";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sb3.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sb3.veay.cn/user/qiandao.php"){

sb3__A();

}

if(window.location.href=="https://dc8.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dc8";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dc8.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dc8.veay.cn/user/qiandao.php"){

dc8__A();

}

if(window.location.href=="https://xs8.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xs8";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xs8.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xs8.veay.cn/user/qiandao.php"){

xs8__A();

}

if(window.location.href=="https://wzj8.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "wzj8";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://wzj8.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://wzj8.veay.cn/user/qiandao.php"){

wzj8__A();

}

if(window.location.href=="https://yyh8.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "yyh8";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://yyh8.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://yyh8.veay.cn/user/qiandao.php"){

yyh8__A();

}

if(window.location.href=="https://zgl8.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "zgl8";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://zgl8.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://zgl8.veay.cn/user/qiandao.php"){

zgl8__A();

}

if(window.location.href=="https://shoucan03.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "shoucan03";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://shoucan03.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://shoucan03.veay.cn/user/qiandao.php"){

shoucan03__A();

}

if(window.location.href=="https://xq8.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xq8";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xq8.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xq8.veay.cn/user/qiandao.php"){

xq8__A();

}

if(window.location.href=="https://dq8.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dq8";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dq8.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dq8.veay.cn/user/qiandao.php"){

dq8__A();

}

if(window.location.href=="https://gsl8.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "gsl8";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://gsl8.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://gsl8.veay.cn/user/qiandao.php"){

gsl8__A();

}

if(window.location.href=="https://sgwe8.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sgwe8";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sgwe8.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sgwe8.veay.cn/user/qiandao.php"){

sgwe8__A();

}

if(window.location.href=="https://sx4.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sx4";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sx4.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sx4.veay.cn/user/qiandao.php"){

sx4__A();

}

if(window.location.href=="https://dc4.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dc4";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dc4.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dc4.veay.cn/user/qiandao.php"){

dc4__A();

}

if(window.location.href=="https://xs4.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xs4";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xs4.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xs4.veay.cn/user/qiandao.php"){

xs4__A();

}

if(window.location.href=="https://sb4.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sb4";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sb4.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sb4.veay.cn/user/qiandao.php"){

sb4__A();

}

if(window.location.href=="https://wzj4.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "wzj4";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://wzj4.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://wzj4.veay.cn/user/qiandao.php"){

wzj4__A();

}

if(window.location.href=="https://yyh4.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "yyh4";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://yyh4.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://yyh4.veay.cn/user/qiandao.php"){

yyh4__A();

}

if(window.location.href=="https://zgl4.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "zgl4";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://zgl4.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://zgl4.veay.cn/user/qiandao.php"){

zgl4__A();

}

if(window.location.href=="https://shoucan04.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "shoucan04";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://shoucan04.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://shoucan04.veay.cn/user/qiandao.php"){

shoucan04__A();

}

if(window.location.href=="https://xq4.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xq4";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xq4.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xq4.veay.cn/user/qiandao.php"){

xq4__A();

}

if(window.location.href=="https://dq4.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dq4";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dq4.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dq4.veay.cn/user/qiandao.php"){

dq4__A();

}

if(window.location.href=="https://gsl4.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "gsl4";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://gsl4.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://gsl4.veay.cn/user/qiandao.php"){

gsl4__A();

}

if(window.location.href=="https://sgwe4.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sgwe4";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sgwe4.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sgwe4.veay.cn/user/qiandao.php"){

sgwe4__A();

}

if(window.location.href=="https://sx6.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sx6";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sx6.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sx6.veay.cn/user/qiandao.php"){

sx6__A();

}

if(window.location.href=="https://dc6.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dc6";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dc6.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dc6.veay.cn/user/qiandao.php"){

dc6__A();

}

if(window.location.href=="https://sb5.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sb5";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sb5.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sb5.veay.cn/user/qiandao.php"){

sb5__A();

}

if(window.location.href=="https://xs6.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xs6";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xs6.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xs6.veay.cn/user/qiandao.php"){

xs6__A();

}

if(window.location.href=="https://wzj6.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "wzj6";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://wzj6.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://wzj6.veay.cn/user/qiandao.php"){

wzj6__A();

}

if(window.location.href=="https://shoucan05.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "shoucan05";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://shoucan05.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://shoucan05.veay.cn/user/qiandao.php"){

shoucan05__A();

}

if(window.location.href=="https://yyh6.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "yyh6";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://yyh6.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://yyh6.veay.cn/user/qiandao.php"){

yyh6__A();

}

if(window.location.href=="https://zgl6.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "zgl6";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://zgl6.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://zgl6.veay.cn/user/qiandao.php"){

zgl6__A();

}

if(window.location.href=="https://xq6.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xq6";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xq6.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xq6.veay.cn/user/qiandao.php"){

xq6__A();

}

if(window.location.href=="https://dq6.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dq6";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dq6.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dq6.veay.cn/user/qiandao.php"){

dq6__A();

}

if(window.location.href=="https://gsl6.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "gsl6";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://gsl6.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://gsl6.veay.cn/user/qiandao.php"){

gsl6__A();

}

if(window.location.href=="https://sgwe6.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sgwe6";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sgwe6.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sgwe6.veay.cn/user/qiandao.php"){

sgwe6__A();

}

if(window.location.href=="https://sx2.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sx2";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sx2.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sx2.veay.cn/user/qiandao.php"){

sx2__A();

}

if(window.location.href=="https://dc2.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dc2";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dc2.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dc2.veay.cn/user/qiandao.php"){

dc2__A();

}

if(window.location.href=="https://sb6.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sb6";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sb6.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sb6.veay.cn/user/qiandao.php"){

sb6__A();

}

if(window.location.href=="https://xs2.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xs2";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xs2.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xs2.veay.cn/user/qiandao.php"){

xs2__A();

}

if(window.location.href=="https://wzj2.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "wzj2";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://wzj2.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://wzj2.veay.cn/user/qiandao.php"){

wzj2__A();

}

if(window.location.href=="https://yyh2.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "yyh2";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://yyh2.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://yyh2.veay.cn/user/qiandao.php"){

yyh2__A();

}

if(window.location.href=="https://shoucan06.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "shoucan06";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://shoucan06.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://shoucan06.veay.cn/user/qiandao.php"){

shoucan06__A();

}

if(window.location.href=="https://zgl2.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "zgl2";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://zgl2.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://zgl2.veay.cn/user/qiandao.php"){

zgl2__A();

}

if(window.location.href=="https://xq2.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xq2";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xq2.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xq2.veay.cn/user/qiandao.php"){

xq2__A();

}

if(window.location.href=="https://dq2.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dq2";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dq2.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dq2.veay.cn/user/qiandao.php"){

dq2__A();

}

if(window.location.href=="https://gsl2.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "gsl2";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://gsl2.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://gsl2.veay.cn/user/qiandao.php"){

gsl2__A();

}

if(window.location.href=="https://sgwe2.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sgwe2";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sgwe2.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sgwe2.veay.cn/user/qiandao.php"){

sgwe2__A();

}

if(window.location.href=="https://sx5.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sx5";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sx5.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sx5.veay.cn/user/qiandao.php"){

sx5__A();

}

if(window.location.href=="https://dc5.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dc5";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dc5.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dc5.veay.cn/user/qiandao.php"){

dc5__A();

}

if(window.location.href=="https://sb7.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sb7";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sb7.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sb7.veay.cn/user/qiandao.php"){

sb7__A();

}

if(window.location.href=="https://xs5.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xs5";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xs5.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xs5.veay.cn/user/qiandao.php"){

xs5__A();

}

if(window.location.href=="https://wzj5.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "wzj5";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://wzj5.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://wzj5.veay.cn/user/qiandao.php"){

wzj5__A();

}

if(window.location.href=="https://shoucan07.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "shoucan07";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://shoucan07.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://shoucan07.veay.cn/user/qiandao.php"){

shoucan07__A();

}

if(window.location.href=="https://yyh5.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "yyh5";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://yyh5.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://yyh5.veay.cn/user/qiandao.php"){

yyh5__A();

}

if(window.location.href=="https://zgl5.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "zgl5";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://zgl5.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://zgl5.veay.cn/user/qiandao.php"){

zgl5__A();

}

if(window.location.href=="https://xq5.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xq5";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xq5.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xq5.veay.cn/user/qiandao.php"){

xq5__A();

}

if(window.location.href=="https://dq5.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dq5";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dq5.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dq5.veay.cn/user/qiandao.php"){

dq5__A();

}

if(window.location.href=="https://gsl5.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "gsl5";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://gsl5.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://gsl5.veay.cn/user/qiandao.php"){

gsl5__A();

}

if(window.location.href=="https://sgwe5.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sgwe5";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sgwe5.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sgwe5.veay.cn/user/qiandao.php"){

sgwe5__A();

}

if(window.location.href=="https://sx1.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sx1";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sx1.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sx1.veay.cn/user/qiandao.php"){

sx1__A();

}

if(window.location.href=="https://dc1.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dc1";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dc1.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dc1.veay.cn/user/qiandao.php"){

dc1__A();

}

if(window.location.href=="https://sb8.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sb8";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sb8.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sb8.veay.cn/user/qiandao.php"){

sb8__A();

}

if(window.location.href=="https://xs1.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xs1";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xs1.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xs1.veay.cn/user/qiandao.php"){

xs1__A();

}

if(window.location.href=="https://wzj1.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "wzj1";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://wzj1.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://wzj1.veay.cn/user/qiandao.php"){

wzj1__A();

}

if(window.location.href=="https://shoucan08.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "shoucan08";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://shoucan08.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://shoucan08.veay.cn/user/qiandao.php"){

shoucan08__A();

}

if(window.location.href=="https://yyh1.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "yyh1";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://yyh1.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://yyh1.veay.cn/user/qiandao.php"){

yyh1__A();

}

if(window.location.href=="https://zgl1.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "zgl1";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://zgl1.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://zgl1.veay.cn/user/qiandao.php"){

zgl1__A();

}

if(window.location.href=="https://xq1.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xq1";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xq1.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xq1.veay.cn/user/qiandao.php"){

xq1__A();

}

if(window.location.href=="https://dq1.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dq1";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dq1.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dq1.veay.cn/user/qiandao.php"){

dq1__A();

}

if(window.location.href=="https://gsl1.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "gsl1";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://gsl1.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://gsl1.veay.cn/user/qiandao.php"){

gsl1__A();

}

if(window.location.href=="https://sgwe1.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sgwe1";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sgwe1.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sgwe1.veay.cn/user/qiandao.php"){

sgwe1__A();

}

if(window.location.href=="https://sx3.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sx3";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sx3.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sx3.veay.cn/user/qiandao.php"){

sx3__A();

}

if(window.location.href=="https://dc3.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dc3";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dc3.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dc3.veay.cn/user/qiandao.php"){

dc3__A();

}

if(window.location.href=="https://sb9.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sb9";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sb9.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sb9.veay.cn/user/qiandao.php"){

sb9__A();

}

if(window.location.href=="https://xs3.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xs3";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xs3.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xs3.veay.cn/user/qiandao.php"){

xs3__A();

}

if(window.location.href=="https://wzj3.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "wzj3";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://wzj3.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://wzj3.veay.cn/user/qiandao.php"){

wzj3__A();

}

if(window.location.href=="https://shoucan09.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "shoucan09";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://shoucan09.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://shoucan09.veay.cn/user/qiandao.php"){

shoucan09__A();

}

if(window.location.href=="https://yyh3.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "yyh3";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://yyh3.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://yyh3.veay.cn/user/qiandao.php"){

yyh3__A();

}

if(window.location.href=="https://zgl3.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "zgl3";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://zgl3.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://zgl3.veay.cn/user/qiandao.php"){

zgl3__A();

}

if(window.location.href=="https://xq3.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "xq3";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://xq3.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://xq3.veay.cn/user/qiandao.php"){

xq3__A();

}

if(window.location.href=="https://dq3.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "dq3";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://dq3.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://dq3.veay.cn/user/qiandao.php"){

dq3__A();

}

if(window.location.href=="https://gsl3.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "gsl3";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://gsl3.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://gsl3.veay.cn/user/qiandao.php"){

gsl3__A();

}

if(window.location.href=="https://sgwe3.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sgwe3";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://sgwe3.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sgwe3.veay.cn/user/qiandao.php"){

sgwe3__A();

}

if(window.location.href=="https://sbgly.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "sbgly";
document.querySelector('input[name="pass"]').value = "123456" ;
document.getElementById('submit_login').click();
}
if(window.location.href=="https://sbgly.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://sbgly.veay.cn/user/qiandao.php"){

sbgly__A();

}

if(window.location.href=="https://ys01.veay.cn/user/login.php"){
document.querySelector('input[name="user"]').value = "163418226901";
document.querySelector('input[name="pass"]').value = "a123456" ;
document.getElementById('submit_login').click();
}

if(window.location.href=="https://ys01.veay.cn/user/"){

qiandao1();

}else if(window.location.href=="https://ys01.veay.cn/user/qiandao.php"){

__A();

}














}
)();

