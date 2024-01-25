const express = require("express");
const {
  setArticles,
  getArticles,
  deleteArticles,
  editArticles,
} = require("../controllers/articles.controller");
const router = express.Router();

router.get("/", getArticles);
router.post("/", setArticles);
router.put("/:id", editArticles);
router.delete("/:id", deleteArticles);

module.exports = router;
