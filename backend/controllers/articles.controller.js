const ArticleModel = require("../models/articles.model");

module.exports.getArticles = async (req, res) => {
  const article = await ArticleModel.find();
  res.status(200).json(article);
};

module.exports.setArticles = async (req, res) => {
  const article = await ArticleModel.create({
    imageUrl: req.body.image,
    title: req.body.title,
    description: req.body.description,
  });
  res.status(200).json(article);
};

module.exports.editArticles = async (req, res) => {
  const article = await ArticleModel.findById(req.params.id);

  if (!article) {
    res.status(400).json({ message: "Cet article n'existe pas" });
  }

  const updatearticle = await ArticleModel.findByIdAndUpdate(
    article,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatearticle);
};

module.exports.deleteArticles = async (req, res) => {
  const article = await ArticleModel.findById(req.params.id);

  if (!article) {
    res.status(400).json({ message: "Cet article n'existe pas" });
  }

  await article.deleteOne({ _id: req.params.id });
  res.status(200).json({
    message: "L'article a correctement été supprimer",
  });
};
