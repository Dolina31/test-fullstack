import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
  },
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    setNewArticle: (state, action) => {
      state.articles.push(action.payload); // Ajoute le nouvel article à la liste existante
    },
  },
});

export const getArticles = createAsyncThunk(
  "articles/articlesdatas",
  async () => {
    const res = await fetch("http://localhost:3001/articles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const articlesData = await res.json();

    return articlesData;
  }
);

export const newArticle = createAsyncThunk(
  "article/newarticle",
  async (formData) => {
    try {
      const res = await fetch("http://localhost:3001/articles", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Erreur HTTP: ${res.status}`);
      }

      const data = await res.json();

      return data;
    } catch (error) {
      console.error("Erreur lors de la requête POST", error);
    }
  }
);

export const deleteArticle = createAsyncThunk(
  "articles/deleteArticle",
  async (articleId) => {
    const res = await fetch(`http://localhost:3001/articles/${articleId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const articlesData = await res.json();

    return articlesData;
  }
);

export const { setArticles, setNewArticle } = articlesSlice.actions;
export default articlesSlice.reducer;
