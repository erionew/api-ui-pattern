import './App.css';
import { useEffect, useState } from 'react';
const key = '7298ee9bd9214c28b9606bd3e3a9ae9e'

function App() {
  const [recipes, setRecipes] = useState([])


  //fetching the recipe api
  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=30`)
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
  }, [])

  return (
    <>
    <h1>Modal Wireframe</h1>

    {recipes.map(recipe => {

      return(
        <div className='container--img'>
          <img src={recipe.image}></img>
        </div>
      )

    })}
    </>
  )
}

export default App;
