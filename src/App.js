import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'
import './App.css'

const App = () => {
  const APP_ID = 'faa3759a'
  const APP_KEY = '9a98d4d5613e2f6339c7384c342d98b3'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getRecipes()
  }, [search])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json()
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <form className="search-form">
        <input
          className="seach-bar"
          type="text"
          value={search}
          onChange={}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  )
}

export default App
