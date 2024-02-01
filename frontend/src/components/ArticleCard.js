import React from "react";
import { useSelector } from "react-redux";

const ArticleCard = () => {
  const articlesData = useSelector((state) => state.articles.articles);

  console.log("articlesData dans ArticleCard :", articlesData);

  return (
    <div className="flex flex-col gap-1">
      {articlesData.map((article) => (
        <a
          href="#" // Utilisez une valeur unique ici, par exemple "#"
          key={article._id}
          className="flex flex-row bg-white p-3 mt-1 relative"
        >
          <img
            src={article.image}
            className="h-28 w-28 object-cover aspect-auto"
          />
          <div className="font-inria ml-3">
            <h3 className="font-bold text-1sm">{article.title}</h3>
            <p className="text-xs font-flower mt-5">{article.description}</p>
          </div>
          <button className="font-flower absolute bottom-2 right-2 text-xs transition-transform transform hover:scale-110">
            Lire la suite...
          </button>
        </a>
      ))}
    </div>
  );
};

export default ArticleCard;
