import React from "react"

export function Main(){
    
    const [ingredients, setIngredients] = React.useState<string[]>([]); 
    const ingredientListItems = ingredients.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event : any){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredients: any) => [...prevIngredients, newIngredient])
        

    }

    return<>
   <main className="mainTag">
    <form onSubmit={handleSubmit}  className="add-ingredient-form">
        <input 
        name="ingredient"
         type="text"
         placeholder="e.g. oregano"
         aria-label="Add ingredient"/>
        <button> Add ingredient</button>
    </form>
    <ul>
       {ingredientListItems}
    </ul>
   </main>
    
    </>
}