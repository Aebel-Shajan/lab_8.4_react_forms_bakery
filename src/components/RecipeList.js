import Recipe from "../components/Recipe";

const RecipeList = ({recipes}) => {
    
    const recipeComponents = recipes.map((recipe, index) => {
        return <Recipe recipe={recipe} key={index}/>
    })
    
    return ( 
    <ul>{recipeComponents}</ul>
    );
}
 
export default RecipeList;