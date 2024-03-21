import { useState } from "react";

const RecipeForm = ({recipes, addRecipe}) => {
    const [recipeName, setRecipeName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [rating, setRating] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleValidation()) {
            const newRecipe = {
                recipeName,
                ingredients,
                rating
            }
            addRecipe(newRecipe);
            return;
        }

    }

    const handleValidation = () => {
        let validation = true;
        if (recipes.find(recipe => recipe.recipeName === recipeName)) {
            alert("Recipe already exists!")
            validation = false;
        }

        if (recipeName === "" || ingredients.length === 0) {
            alert("Recipe name or ingredients should not be empty!");
            validation = false;
        }
        return validation;
    }
    
    return ( 
    <form
        onSubmit={handleSubmit}
    >
        <h3>Add New Recipes</h3>
        <input 
            type="text" 
            name="recipeName" 
            placeholder="Enter recipe name: " 
            value={recipeName}
            onChange={(event) => setRecipeName(event.target.value)}
        />
        <input 
            type="text" 
            name="ingredients" 
            placeholder="Enter a list of ingredients separated by commas:" 
            value={ingredients}
            onChange={(event) => setIngredients(event.target.value.split(","))}
        />
        <input 
            type="number" 
            name="rating" 
            value={rating}
            min="0" max="5"
            onChange={(event) => setRating(event.target.value)}
        />
        <input
            type="submit"
            value="Submit"
        />
    </form> );
}
 
export default RecipeForm;