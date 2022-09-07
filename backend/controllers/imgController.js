const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Image = require("../models/imageModel");
const fs = require('fs');
const path = require("path");


// Step 5 - set up multer for storing uploaded files

var multer = require('multer');
const sendToken = require("../utils/jwtToken");



exports.getImage = catchAsyncErrors(async (req, res, next) => {
  const images = await Image.find();

  res.status(200).json({
    success: true,
    images,
  });
});


exports.sendImage = catchAsyncErrors(async (req, res, next) => {
     var obj = {
       name: req.body.name,
       desc: req.body.desc,
       img: {
         data: fs.readFileSync(
           path.join(__dirname + "/uploads/" + req.file.filename)
         ),
         contentType: "image/png",
       },
     };
    const image = await Image.create(obj);
    
    sendToken(image, 201, res);
    
})
