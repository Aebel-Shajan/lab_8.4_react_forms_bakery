const Navbar = ({recipes, setFilteredRecipes}) => {
    
    const handleSubmit = (event) => {
        const searchTerm = event.target["searchTerm"].value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => recipe.cakeName.toLowerCase().includes(searchTerm));
        setFilteredRecipes(filteredRecipes);
    }
    
    return (
    <>
        <h2>BNTA Bakery</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="searchTerm" placeholder="Search recipies..."/>
            <input type="submit" value="Search"/>
        </form>
        
    </>
    );
}
 
export default Navbar;