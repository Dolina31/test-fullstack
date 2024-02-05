import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { deleteArticle } from "../features/articlesSlice";

const ArticleCard = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);

  const handleTrashCanClick = (id) => {
    dispatch(deleteArticle(id));
  };

  return (
    <div className="flex flex-col gap-1">
      {articles.map((article) => (
        <div
          key={article._id}
          className="flex flex-row bg-white p-3 mt-1 relative"
        >
          <img
            src={article.imageUrl}
            className="h-28 w-28 object-cover aspect-auto"
          />
          <div className="font-inria ml-3">
            <h3 className="font-bold text-1sm">{article.title}</h3>
            <p className="text-xs font-flower mt-5">{article.description}</p>
          </div>
          <a href={article.id}>
            <button className="font-flower absolute bottom-2 right-2 text-xs transition-transform transform hover:scale-110">
              Lire la suite...
            </button>{" "}
          </a>
          <FontAwesomeIcon
            icon={faTrashAlt}
            onClick={() => handleTrashCanClick(article._id)}
            className="font-flower absolute bottom-2 left-36 text-xs transition-transform transform hover:scale-110 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default ArticleCard;
