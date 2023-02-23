import './App.css';
import { useEffect, useState } from 'react';
import RecipeDetails from './RecipeDetails';
import doily from './resources/doily.png'
const key = '7298ee9bd9214c28b9606bd3e3a9ae9e'

function App() {
  const [recipes, setRecipes] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [currentRecipe, setCurrentRecipe] = useState([])


  //fetching the recipe api
  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=30&tags=dessert&instructionsRequired=true`)
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
  }, [])

  
  return (
    <>
    <header>
      <img className="img--logo rotate"src={doily}></img>
      <h1>Just <span className='h1__span'>Desserts</span></h1>
    </header>
    
    <div className='container--img-gallery'>
        {recipes.map(recipe => {
        
          return(
            
              <div className='container--img' onClick={
                (e) => 
                {
                  setCurrentRecipe(recipe)
                  setOpenModal(true)
                }
              }>
                <img src={recipe.image}></img>
              </div> 
          
          )
        })}
     </div>
      {openModal && 
        <RecipeDetails 
        closeModal={setOpenModal} 
        name={currentRecipe.title} 
        servings={currentRecipe.servings} 
        time={currentRecipe.readyInMinutes}
        instructions={<div dangerouslySetInnerHTML={{ __html: currentRecipe.instructions }} />}
        image={currentRecipe.image}
      />}
    </>
  )
}

export default App;
