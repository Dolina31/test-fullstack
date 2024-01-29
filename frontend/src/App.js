import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { getArticles, setArticles } from "./features/articlesSlice";
import { React, useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // récupération des données du profil de l'utilisateur à partir du serveur
    dispatch(getArticles()).then((resultAction) => {
      // extrait les données du profil de la réponse
      const articles = resultAction.payload;

      dispatch(setArticles(articles));

      // mise à jour le store Redux avec les données du profil
      console.log(articles);
    });
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
