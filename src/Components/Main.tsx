import React from "react"

export function Main(){
    
    const [ingredients, setIngredients] = React.useState<string[]>([]); 
    const ingredientListItems = ingredients.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData : any){
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredients: any) => [...prevIngredients, newIngredient])
        

    }

    return<>
   <main className="mainTag">
    <form action={addIngredient} className="add-ingredient-form">
        <input 
        name="ingredient"
         type="text"
         placeholder="e.g. oregano"
         aria-label="Add ingredient"/>
        <button> Add ingredient</button>
    </form>

  {
    ingredients.length > 0 &&
    <section className="ingredients-section">
    <h2>Ingredients on hand:</h2>
    <ul className="ingredients-list">{ingredientListItems}</ul>
    
    {ingredients.length > 3 && <div className="recipe-container">
        <div className="recipe-text">
         <h3>Ready for a recipe? </h3>
         <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button className="get-recipe-btn">Get recipe</button>
    </div>}
  </section>}
   </main>
    
    </>
} 