import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => 
    state.favorites.map(id =>
      state.recipes.find(recipe => recipe.id === id)
    ).filter(Boolean)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map(recipe => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
