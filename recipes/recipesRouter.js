const express = require("express");
const helpers = require("./recipesModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
   try {
       const recipes = await helpers.getRecipes();
       res.status(200).json(recipes);
   } catch (e) {
       next(e)
   }
});

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const list = await helpers.getShoppingList(id);
        res.status(200).json(list)
    } catch (e) {
        next(e)
    }
});

router.get("/:id/steps", async (req, res, next) => {
   try {
       const { id } = req.params;
       const step = await helpers.getInstructions(id);
       res.status(200).json(step)
   } catch (e) {
       next(e)
   }
});

module.exports = router;
