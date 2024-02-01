import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    image: "",
    title: "",
    description: "",
  },
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
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
      const response = await fetch("http://localhost:3001/articles", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        // Gérer les erreurs, par exemple en lançant une exception
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      // Faire quelque chose avec les données si nécessaire
      return data;
    } catch (error) {
      // Gérer les erreurs réseau ou autres
      console.error("Erreur lors de la requête POST", error);
      throw error; // Facultatif : vous pouvez choisir de relancer l'erreur pour que le reducer la gère
    }
  }
);

export const {
  setImage,
  setTitle,
  setDescription,
  setArticles,
  setNewArticle,
} = articlesSlice.actions;
export default articlesSlice.reducer;
