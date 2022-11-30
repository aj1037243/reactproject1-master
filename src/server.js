const express = require('express');
const app = express();
const cors = require("cors");

const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./models/user")


//body parser is used to be middleware to recieve form data
const urlencodedParser = bodyParser.urlencoded({extended: false})
app.use(bodyParser.json(), urlencodedParser)
app.use(cors());
app.use(express.json());

//mongoose connection: Working as of 11/28/2022
dataBaseURI = "mongodb+srv://AthensTourism:Athens2022@project1-cluster.cjinr0q.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(dataBaseURI, { useNewUrlParser:true, useUnifiedTopology: true})
.then((res) => {


//=======================User Login/Registration============================
//routes for models
//userModel:
//=================USER REGISTRATION========================//
app.post("/register", async(req, res) => {
  const user = req.body;

  const takenUsername = await User.findOne({username: user.username})
  const takenEmail = await User.findOne({email: user.email})

  if(takenUsername || takenEmail) {
    res.json({message: "Username or email has already been taken"})
  } else {
    user.password = await bcrypt.hash(req.body.password, 10)

    const dbUser = new User({
      username: user.username.toLowerCase(),
      email: user.email.toLowerCase(),
      password: user.password

    })

    dbUser.save()
    res.json({message: "Success"})
  }
  })
//=================USER LOGIN========================//
  app.post("/login", (req, res) => {
    const userLoggingIn = req.body;

    User.findOne({username: userLoggingIn.username})
    .then(dbUser => {
      if(!dbUser) {
        return res.json({
          message: "Invalid Username or Password"
        })
      }
    bcrypt.compare(userLoggingIn.password, dbUser.password)
    .then(isCorrect => {
      if(isCorrect) {
      const payload = {
        id:       dbUser._id,
        username: dbUser.username,
      }
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {expiresIn: 86400}, //=1day or 24hrs
        (err, token) => {
          
          if(err) return res.json({message:err})
          return res.json({
            message: "Success",
            token: "Bearer " + token
          })
        }
      )
    } else {
      return res.json({
        message: "Invalid Username or Password"
      })
    }
    })
  })
   function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"]?.split(' ')[1]

    if(token) {
      jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
        if(err) return res.json({
          isLoggedIn: false,
          message: "Failed to Authenticate"
        })
        req.user = {};
        req.user.id = decoded.id
        req.user.username = decoded.username
        next()
      })
    } else {
      res.json({message: "Incorrect Token Given", isLoggedIn: false})
    }
   }
   //getter to verify/access the current logged in user
   app.get("/getUsername", verifyJWT, (req, res) => {
  res.json({isLoggedIn: true, username: req.user.username})
})


//====================End User Login/Registraion===========================

//====================UserCreateContent====================================
//userContent:
app.use("/", require("./routes/userContentRoute"));
//====================UserCreateContent End================================


//express server port
app.listen(3001, () => 
console.log("Success -> Express Server is running on port 3001"))
})


})