import { useState } from "react";
import Navbar from "../components/Navbar";
import RecipeForm from "../components/RecipeForm";
import RecipeList from "../components/RecipeList";

const RecipeContainer = () => {

    const [recipes, setRecipes] = useState([
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
      ])

    const [filteredRecipes, setFilteredRecipes] = useState([...recipes]);

    const addRecipe = (recipe) => {
        setRecipes([...recipes, recipe])
    }

    return (
    <>
        <Navbar recipes={recipes} setFilteredRecipes={setFilteredRecipes}/>
        <RecipeList recipes={filteredRecipes}/>
        <RecipeForm recipes={recipes} addRecipe={addRecipe}/>
    </>
);
}

export default RecipeContainer;