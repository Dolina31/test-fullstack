import React from "react";
import { useSelector } from "react-redux";
import Form from "../components/Form";

const Home = () => {
  const articlesData = useSelector((state) => state.articles.articles);

  return (
    <>
      {articlesData.map((article) => (
        <div key={article._id}>
          <h2>{article.title}</h2>
          <img src={article.image} />
          <p>{article.description}</p>
          {/* <p>{article.createdAt}</p> */}
        </div>
      ))}
      <Form />
    </>
  );
};

export default Home;
