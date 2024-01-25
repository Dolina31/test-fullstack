const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database successfully connected"))
    .catch((error) =>
      console.error("Erreur lors de la connexion à MongoDB :", error.message)
    );
};

module.exports = connectDB;
