const express = require("express");
const router = express.Router();
const path = require("path");
const {
  getMember,
  getOffer,
  getRequest,
  searchOffer
} = require("./queries/getData");

router.get("/get-member", (req, res) => {
  const memberId = req.query.member_id;
  getMember(memberId).then(data => {
    res.json(data);
  });
});

router.get("/get-profile", (req, res) => {
  const memberId = req.query.member_id;

  Promise.all([
    getMember(memberId),
    getOffer(memberId),
    getRequest(memberId)
  ]).then(data => {
    res.json(data);
  });
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.get("/search-offer", (req, res) => {
  const categoryId = req.query.categoryId;
  searchOffer(categoryId).then(data => {
    res.json(data);
  });
});

module.exports = router;
