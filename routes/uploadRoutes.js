//////////////////////////////
//ROUTES FOR UPLOADING A FILE
// React File Uploader With Express
// https://www.youtube.com/watch?v=b6Oe2puTdMQ
//////////////////////////////
import path from "path";
import express from "express";

const uploadRoute = express.Router();
const uploadPath = path.join(path.resolve(), "client", "build", "static", "media");

uploadRoute.post("/upload", function (req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send({ message: "No files uploaded" });
  }
  const file = req.files.file;
  file.mv(`${uploadPath}/${file.name}`, (err) => {
    if (err) {
      console.log(`error uploading ${file.name}: ${err.message}`);
      return res.status(500).send({ message: err.message });
    } else {
      console.log(`uploaded ${file.name} okay`);
      return res.status(200).send({ images: [{imageName: file.name, imageUrl: `/static/media/${file.name}`}] });
    }
  });
});

export default uploadRoute;
