const express = require("express");
const helmet = require("helmet");
const recipeRouter = require("./recipes/recipesRouter");

const server = express();
const port = process.env.PORT || 4000;

server.use(helmet());
server.use(express.json());
server.use("/recipes", recipeRouter);



server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Server error, please try request again"
    })
});

server.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`)
});
