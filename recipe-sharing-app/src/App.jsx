import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import { useRecipeStore } from './components/recipeStore';

function Home() {
  const recipes = useRecipeStore((s) => s.recipes);
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      {/* Replace this simple list with your existing <RecipeList /> if you have it */}
      <div>
        {recipes.map((r) => (
          <div key={r.id}>
            <h3>
              <Link to={`/recipes/${r.id}`}>{r.title}</Link>
            </h3>
            <p>{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
