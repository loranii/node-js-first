const { application } = require("express");
const mongoose = require("mongoose")
// Fields وبالنهاية  Properties وهو فعليا  Schema ومن خلال مكتبة المونغو مجلب شيء اسمه السكيما 
const Schema = mongoose.Schema
//object بيطلع منه  class  هي عبارة عن  Schema 
//fields وتضع اوجكت فيه 
const articleSchema = new Schema({
     title: String,
     body: String,
     numberOfLikes: Number, 
}) 

// الخطوة التانية نعرف الموديل
// الموديل هو عبارة عن شغلتين : اسم الجدول وتخطيط الجدول
// ونعرف اسم الموديل وعادة ياخذ نفس اسم الانتيتي يعني ملف الجافاسكريب
//Article يلي عم نشتغل وهنا اسمه 
//ويأخذ 2 باراميتر 
// اسم الجدول
// مخطط الجدول وهو السكيما يعني حقول الأوبجكت 
const Article = mongoose.model("Article", articleSchema);

// index.js أي ملف يلي كل الشغل فيه  endpoint أنا محتاج اتعامل معه من خلال  Article هذا الموديل 
//يجب أولا تصديره الى قاعدة البيانات أولا ثم استدعاءه والتعامل معه index.js ولحتى يشوفه ملف 
// من خلال التالي mongoDB ويتم تصديره لقاعدة البيانات في 
module.exports = Article;
//import من خلال  index.js ثم نطلبه من ملف 


