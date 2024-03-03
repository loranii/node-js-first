// هذا الشرح يتبع مقطع الفيديو تبع يعرب 
// https://www.youtube.com/watch?v=LG7ff9TVWjM&t=5489s


const express = require("express");

const app = express()
app.use(express.json())



//all requests : get, post, put, patch, head, options


// اعطيني الارقام من 0 - 100
app.get("/numbers",(req, res)=>{
      let numbers = "";
      for (i=0; i<=100; i++){
            numbers += i + " - "

      }
   res.send(`<h1>Loranii for ever</h1><br><h1>GOOOO</h1> ${numbers}`)

})


app.post("/postanii",(req, res)=>{
      res.send(`<h1 style="color:green">LORANII for ever</h1>`)
    })
    


app.put("/postanii",(req, res)=>{
    res.send(`<h1 style="color:green">LORANII for ever</h1>`)
})


app.patch("/postanii",(req, res)=>{
      res.send(`<h1 style="color:green">LORANII for ever</h1>`)
    })
 
    

app.delete("/postanii",(req, res)=>{
      res.send(`<h1 style="color:green">LORANII for ever</h1>`)
    })
    



app.head("/postanii",(req, res)=>{
      res.send(`<h1 style="color:green">LORANII for ever</h1>`)
    })
    


app.options("/postanii",(req, res)=>{
      res.send(`<h1 style="color:green">LORANII for ever</h1>`)
    })

    
//////////////////////////////////////////
// عملية حسابية ارسال رقمين واعادة المجموع   


app.get("/summ/:number1/:number2",(req, res)=>{
      const num1 = req.params.number1
      const num2 = req.params.number2

      res.send(`Total :   ${num1} + ${num2} = ${Number(num1)+Number(num2)}`);
})



//// بدون الباث باراميتر
/// باستخدام البدي براميتر body parameter
// في الأعلى لحتى يقرأ من البدي باراميتر app.use(express.json()) يجب اضافة 
app.get("/summ2",(req, res)=>{
      const name = req.body.name
      const age = req.body.age


      res.send(`The Name is :   ${name} <br>
                Age is : ${age}`);


})



/// qurie parameter النوع الثالث من الباراميتر هو ال
// value ثم  key  بتم تعريف رابط معين ثم علامة استفهام ثم  
// localhost:3000/par2?age=50


app.get("/queryparameter",(req, res)=>{

      // res.send(`The Name is :   ${req.body.name} <br>
      //           Age is : ${req.query.age}`);
   res.json({
      name:req.body.name,
      age:req.query.age,
      language:"Arabic",

   });
});



//html ملف res يمكن ارجاع ك
///////////////////////////////////////////////////////////
// اعطيني الارقام من 0 - 100
app.get("/numbers2",(req, res)=>{
      let numbers = "";
      for (i=0; i<=100; i++){
            numbers += i + " - "

      }
   res.send(`<h1>Loranii for ever</h1><br><h3 style="color:red; margin:10px"> ${numbers}</h3>`)

})

//////////////////////////////////////////////////////////
//ejs استخدام ملفات
//ويسمح لي كتابةأوامر مثل الجانغو يعني   ejs  بالأصل ولكن امتداد  html  وهي ملف 
// مثل اللوب والشرط وووو
//وبذلك نجمع كل المنطق البرمجي الذي يتعامل مع ملف الجافاسكريبت ومعهم أكواد ال js  طويل في ملف  html لحتى مانكتب كود 
// في ملف واحد html

// views يتم انشاء مجلد جديد في الدايركتوري اسمه 
// numbers.html نضع فيه ملف اسمه مثلا هنا اسمه 
// طلب الملف يتم من خلال
// sendFile(__dirname + "/views/numbers.html")

//عادي html  ماسبق لطلب ملف 
// html  ولكن من أجل التعامل مع أوامر ولوب وشروط وتعليمات الجافا سكريبت من داخل 
//ejs يجب تنزيل باكيج 
// npm install ejs وكالعادة عن طريق 
// ويتم طلبه بطريقة مختلفة تماما
// res.render("numbers.ejs")
// لأنه متعارف عليه ضمنا أنه سيبحث عنه views  ونلاحظ أننا لم نكتب دايريكتوري 
// views لذلك مهم جدا أن يكون اسم المجلد  

// rendr // json يأخذ باراميتر ك 

// 
//////////////////////////////////////////////////////////

// اعطيني الارقام من 0 - 100
app.get("/numbers3",(req, res)=>{
      let numbers = "";
      for (i=0; i<=100; i++){
            numbers += i + " - "

      }
   //res.sendFile(__dirname + "/views/numbers.ejs");
   res.render("numbers.ejs", {name:"Louay Horani", numbers:numbers}); //باراميتر تقدر تقرأه ejs  يعتي عم ابعت لصفحة  json يأخذ باراميتر ك 

})


/////////////////////////////////////////////////////////////////

//الان سنبدأ في جزئية الداتابيز

//MongoDB هو  node.js نوع الداتابيز يلي شائع استخدامه مع //noSql
//طبعا يمكن استخدام أنواع اخرى 
//mySql - postgrase....

//ندخل على موقع مونغو ونفتح حساب عندهم مجاني
// لح نخلي اليوزر هو نفسه اسم التطبيق يلي لح يتصل بقاعدة البيانات
//بشكل مباشر أو  API  تعاملي مع قاعدة البيانات ممكن خليه من خلال 
// mongoDB في حالة ال  ODM أو  sql  ك  ORM  عندك خيار أخر اسمه 
//API وهذا أسهل من الطريقة الاعتيادية وقت منخليه مباشرة من خلال 
//وبالتالي كل  js في  object أو  class  يتمثل ك  Table  وهذه السهولة أيضا تتمثل أنك تستطيع كل 
// تعديل في الجداول في السيرفر يحدث تعديل مقابل في مايقابله في جداول قاعدة البيانات 

// mongooseالأكثر شيوعا والتي تسهل لنا التواصل مع قاعدة البيانات اسمها  ODM  أو  ORM  فمكتبة 
// mongoose لذلك يجب تنزيل مكتبة 
// npm install mongoose
//package.json بعد تنزيله لح تلاقيه في ملف 

// وبتروح على صفحة المونغو وبتعمل كوننكت وبتاخد رابط قاعدة البيانات لمشروعك وهو هنا
//mongodb+srv://loranii:<password>@cluster0.es5byry.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// ثم هذه الخطوات لربط مشروعي بقاعدة البيانات في مونغو 

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://loranii:456lo.9978@cluster0.es5byry.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected successfully")
}).catch((error)=>{
  console.log("error with connecting with the DB", error)
})
 
///////بعد ذلك سننشأ مجلد الموديل
//يعني ملف جافاسكريبت داخل مجلد الموديل  entity وننشيء انتيتي 
//خصائص Properties وهذا الملف هو كلاس او اوبجكت يلي بدي اعطيه 
//mongoose وفيه نجلب مكتبة مونغوس 
//Articles.js نتابع الشرح في ملف 

//وأصبح الجدول موجود في قاعدة البيانات Articles عودة بعد ماعملنا سكيما في ملف 
// نمشي على هي الخطوات
//Article نعرف متغير ونجيب ملف ال 
const Article = require("./models/Articles")
//أصبح يمثلي الوسيط يلي من خلاله  أستطيع أن أضيف مقال جديد أو احدف أو عدلArticle  هذا المتغير  
// Article يعني التعامل مابيني وبين قاعدة البيانات صار من خلال هذا الانتيتي  تحديدا 
// ORM أو  ODM بمثل  Article   


//الأن سنبدأ بإدخال بيانات ضمن الجدول أو الكولاكشن
//======Articles ENDPIONT===============
app.post("/articles", async (req,res)=>{
      const newArticle = new Article;

      const artTitle = req.body.articleTitle;
      const artBody = req.body.articleBody;
      
      newArticle.title = artTitle;
      newArticle.body = artBody;
      newArticle.numberOfLikes = 0;
      await newArticle.save();

      // res لحتى يكتمل حفظ البيانات في قاعدة البيانات قبل أن يعطي  await + async  تم اضافة 
     // res.send("The new article has been save successfully");// res.json من أجل يكون عملي احترافي أكثر نلغي هذه ونضع 
     res.json(`${newArticle.title} / ${newArticle.body}`);

 })


 //// ملاحظة  ////
// الى السيرفر  parameters مع  req  ملاحظة : عادة الفرونت اند هي يلي تعطي اسم المقال ووو .. يعني هي التي ترسل 
// سواء اضافة أو قراءة أو تعديل ..
//body parameters (json) من خلال  parameters  الأفضل في هذه الحالة هو استخدام ال  req  ال 
// مثل ماتعلمنا
// وهي تطبيق 


// app.post("/articles", async (req,res)=>{
//       const newArticle = new Article;

//       const artTitle = req.body.articleTitle;
//       const artBody = req.body.articleBody;
//       res.send(artTitle + " " + artBody);
//       return;//تاني لحتى مايصل للفنكشن يلي تحت res هي الريتيرن لانه في تحت 

      
//       newArticle.title = "Lords of the Rings";
//       newArticle.body = "As Book";
//       newArticle.numberOfLikes = 0;
//       await newArticle.save();
//       // res لحتى يكتمل حفظ البيانات في قاعدة البيانات قبل أن يعطي  await + async  تم اضافة 
//       res.send("The new article has been save successfully");
//  })



// جلب كل الداتابيز
app.get("/articles", async(req,res)=>{
      //Article تذكر دائما وأبدا أن الوسيط مع الداتابيز هو 
      // find  وسنستخدم معها فنكشن جاهزة بتجيب كل محتوى الداتابيز وهي :ف
      // ومنحط يلي جبناه في متغير
     const allArticles = await Article.find();
     res.json(allArticles);//خطوة بخطوة API هيك أنا عم ابني كمان 

})




// محددة Article  جلب
//  الخاص بها key  وهي ال article الخاص بهذه ال  id طبعا من خلال 

app.get("/articles/:articleId", async(req,res)=>{
     const id = req.params.articleId;
     try{
       const article = await Article.findById(id)
       res.json(article);//خطوة بخطوة API هيك أنا عم ابني كمان 
       return;
     }catch(error){
     console.log("error while reading article by id", id);
     return res.send("error")
     }
})


// محددة Article  حذف
//  الخاص بها key  وهي ال article الخاص بهذه ال  id طبعا من خلال 

app.delete("/articles/:articleId", async(req,res)=>{
      const id = req.params.articleId;
      try{
        const article = await Article.findByIdAndDelete(id)
        res.json(article);//خطوة بخطوة API هيك أنا عم ابني كمان 
        return;
      }catch(error){
      console.log("error while reading article by id", id);
      return res.send("error")
      }
 })
 

// numbers.ejs لح نعمل مثل ماعملنا بال  html  لإظهار نتيجة جلب الداتابيز كصفحة
//ejs يعني لح ننشأ ملف جديد امتداد 

app.get("/showArticles", async (req, res)=>{
      const articles = await Article.find();
      const artNum = articles.length
      res.render("showArticles.ejs",{
            allArticles:articles,
            artNum:artNum
      })

})


//////////////////////////////////////////////////////////////////////////////////////////

//رفع الباك اند يختلف تماما عن رفع الفرونت اند على مواقع السيرفرات
//render هو موقع  BackEnd من المواقع العالمية كسيرفر مجاني يتم رفع مشروع 
// render.com

////////////////////////////////////////////////////////////////////////////////////////
app.listen(3000, ()=>{
      console.log("<<<<<<<<< IT is Done >>>>>>>>>")
})