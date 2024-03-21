import Navbar from "../components/Navbar";
import RecipeForm from "../components/RecipeForm";
import RecipeList from "../components/RecipeList";

const RecipeContainer = () => {
    return (
    <>
        <Navbar />
        <RecipeList />
        <RecipeForm />
    </>
);
}

export default RecipeContainer;