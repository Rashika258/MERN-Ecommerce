const express = require("express");
const { getImage, sendImage } = require("../controllers/imgController");
const upload = require("../middleware/upload");

const multer = require("multer");


const router = express.Router();

router.route("/get/image").get(getImage);



// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

// var upload = multer({ storage: storage });

// router.route("/upload/img").post(sendImage, upload.single('image'));


router.post("/upload", upload.single("file"), async (req, res) => {
  if (req.file === undefined) return res.send("you must select a file.");
  const imgUrl = `http://localhost:8080/file/${req.file.filename}`;
  return res.send(imgUrl);
});

module.exports=router
