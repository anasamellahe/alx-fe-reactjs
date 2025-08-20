import { useEffect, useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => String(r.id) === String(recipeId))
  );
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState(recipe?.title ?? '');
  const [description, setDescription] = useState(recipe?.description ?? '');

  useEffect(() => {
    setTitle(recipe?.title ?? '');
    setDescription(recipe?.description ?? '');
  }, [recipeId, recipe?.title, recipe?.description]);

  if (!recipe) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipeId, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
