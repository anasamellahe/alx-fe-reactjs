import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => String(r.id) === String(id))
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Edit Recipe</h3>
      <EditRecipeForm recipeId={recipe.id} />

      <DeleteRecipeButton recipeId={recipe.id} />
      <div style={{ marginTop: 12 }}>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
