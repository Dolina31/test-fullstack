import React from "react";
import { useSelector } from "react-redux";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <div>
        <h2 className="font-inria text-xl mt-5 mb-2 ml-5">ARTICLES :</h2>
        <ArticleCard />
      </div>
      <h2 className="font-inria text-xl mt-5 mb-2 ml-5">
        AJOUTER UN NOUVEL ARTICLE
      </h2>
      <Form />
    </>
  );
};

export default Home;
