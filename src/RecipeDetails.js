import React from 'react'
import './RecipeDetails.css'
export default function RecipeDetails({ name, closeModal, servings, time, instructions, image }) {
  return (
    <div className='container--background' onClick={() => closeModal(false)}>
      <div className='container--recipe-details'>
        <button className='btn--close-window' onClick={() => closeModal(false)}>&times;</button>
        <img src={image} alt={name}></img>
        <div className='container--recipe-content'>
          <h2>{name}</h2>
          <span>Servings: {servings}</span>
          <span>Ready in {time} minutes</span>
          {instructions}
        </div>
      </div>
    </div>
  )
}
