import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  const toggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div>
      {displayRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <button onClick={() => toggleFavorite(recipe.id)}>
            {favorites.includes(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
