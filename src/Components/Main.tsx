import React from "react"
import { ClaudeRecipe } from "./ClaudeRecipe";
import { IngredientsList } from "./IngredientsList";
import { getRecipeFromMistral } from "./Ai";

export function Main(){
    
    const [ingredients, setIngredients] = React.useState<string[]>([])
    const [recipe, setRecipe] = React.useState("")

    const [isLoading, setIsLoading] = React.useState(false)

    async function getRecipe(){
        setIsLoading(true) 
        
        try {
            const generatedRecipeMarkdown = await getRecipeFromMistral(ingredients)
           
            if (typeof generatedRecipeMarkdown === "string") {
                setRecipe(generatedRecipeMarkdown)
            }
        } finally {
            setIsLoading(false) 
        }
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

            {ingredients.length > 0 && 
            
            <IngredientsList 
            ingredients={ingredients} 
            getRecipe={getRecipe} 
            isLoading={isLoading} /> } 
            
            {recipe && <ClaudeRecipe recipe={recipe} />}

        </main>
    )
}