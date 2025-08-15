const express = require('express');
const { default: mongoose } = require('mongoose');
const PORT = process.env.PORT || 3000;

const app = express();
mongoose.connect("mongodb+srv://subhransumishra:subhransu700@cluster-1.kmwx7.mongodb.net/").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
