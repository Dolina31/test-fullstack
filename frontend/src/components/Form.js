import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newArticle } from "../features/articlesSlice";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { title, image, description };
    const addNewArticle = await dispatch(newArticle(formData));
  };

  return (
    <div>
      <h1>Ajouter un nouvel article</h1>
      <form>
        <div className="input_wrapper">
          <label htmlFor="title">Titre: </label>
          <input
            type="text"
            placeholder="Titre"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="image">ImageUrl: </label>
          <input
            type="text"
            placeholder="https://images.com"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            placeholder="description"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Valider
        </button>
      </form>
    </div>
  );
};

export default Form;
