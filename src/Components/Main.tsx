import React from "react"
import { ClaudeRecipe } from "./ClaudeRecipe";
import { IngredientsList } from "./IngredientsList";

export function Main(){
    
    const [ingredients, setIngredients] = React.useState<string[]>([
        "all the main spices", "pasta", "ground beef", "tomato paste"
    ]); 

    const [recipeShown, setRecipeShown] = React.useState(false)

    function toggleRecipeShown(){
        setRecipeShown(prevShown => !prevShown)
    }

    function addIngredient(formData : any){
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredients: any) => [...prevIngredients, newIngredient])
    }

    return (
        <main className="mainTag">
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    name="ingredient"
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button> Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && <IngredientsList  
            ingredients={ingredients} 
            toggleRecipeShown={toggleRecipeShown} /> }

            {recipeShown && <ClaudeRecipe/>}

        </main>
    )
}