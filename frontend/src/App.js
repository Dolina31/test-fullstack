import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { getArticles, setArticles } from "./features/articlesSlice";
import { React, useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles()).then((resultAction) => {
      const articles = resultAction.payload;

      console.log("test");
      dispatch(setArticles(articles));
    });
  });

  document.body.classList.add("bg-themeColor"); //Ajout de la couleur thématique du site sur le body
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
