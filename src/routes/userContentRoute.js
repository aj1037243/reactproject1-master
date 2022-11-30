const express = require('express');
const router = express.Router();
const Content = require("../models/contentModel");


//Route Configuration between DB and frontend
//Posting content from site to db
router.route("/postContent").post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const pictureURL = req.body.pictureURL;
    const address = req.body.address;
   
    const newContent = new Content({
        title,
        description,
        pictureURL,
        address
    }) 
    newContent.save();
});
//Getting content from DB and inserting on
router.route("/getContent").get((req, res) => {
     Content.find() 
        .then(foundContent => res.json(foundContent))
     })  

module.exports = router;
