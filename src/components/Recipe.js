const Recipe = ({recipe}) => {
    
    const listIngredients = recipe.ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>;
    })
    
    return (
        <li>
            <h3>{recipe.cakeName}</h3>
            <h5>Ingredients:</h5>
            <ul>{listIngredients}</ul>
            <p>Rating: {recipe.rating}</p>
        </li>
    );
}
export default Recipe;