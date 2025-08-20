import { useState } from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import { useRecipeStore } from './components/recipeStore';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


//use 
function Home() {
  const recipes = useRecipeStore((s) => s.recipes);
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
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
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
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
    </BrowserRouter>
  )
}

export default App
}

export default App
