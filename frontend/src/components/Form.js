import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setNewArticle,
  newArticle,
  setArticles,
} from "../features/articlesSlice";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { title, image, description };
    const newArticleData = await dispatch(newArticle(formData));

    // Dispatchez l'action setNewArticle avec les données du nouvel article
    dispatch(setNewArticle(newArticleData));
  };

  return (
    <div>
      <form className="my-5">
        <div className="input_wrapper m-3 ml-5 flex flex-col gap-1 font-inria">
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            placeholder="Nouvel article !"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-4/5"
          />
        </div>
        <div className="input_wrapper m-3 ml-5 flex flex-col gap-1 font-inria">
          <label htmlFor="image">ImageUrl: </label>
          <input
            type="text"
            placeholder="https://images.com"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.value)}
            className="w-4/5"
          />
        </div>
        <div className="input_wrapper m-3 ml-5 flex flex-col gap-1 font-inria">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            placeholder="Voici mon nouvel article"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-4/5"
          />
        </div>
        <div className="confirm-button w-full flex justify-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-white w-2/5 mt-5 font-inria"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
