import React from "react"

export function Main(){
    
    const [ingredients, setIngredients] = React.useState<string[]>([
        "all the main spices", "pasta", "ground beef", "tomato paste"
    ]); 

    const [recipeShown, setRecipeShown] = React.useState(false)

    function toggleRecipeShown(){
        setRecipeShown(prevShown => !prevShown)
    }

    const ingredientListItems = ingredients.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))

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
                <section className="ingredients-section">
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list">{ingredientListItems}</ul>
                    
                    {ingredients.length > 3 && 
                        <div className="recipe-container">
                            <div className="recipe-text">
                                <h3>Ready for a recipe? </h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={toggleRecipeShown} className="get-recipe-btn">Get a recipe</button>
                        </div>
                    }
                </section>
            }

            {recipeShown && (
                <section className="suggested-recipe-section" aria-live="polite">
                    <h2>Chef Claude Recommends:</h2>
                    <div className="recipe-content">
                        <h3>Beef Pasta Bolognese</h3>
                        <p>Based on your ingredients, here is a delicious and hearty pasta dish you can whip up in no time!</p>
                        
                        <h4>Instructions:</h4>
                        <ol>
                            <li>Boil water and cook the <strong>pasta</strong> according to package directions.</li>
                            <li>In a large skillet, brown the <strong>ground beef</strong> over medium-high heat. Drain excess fat.</li>
                            <li>Stir in the <strong>tomato paste</strong> and <strong>all the main spices</strong>. Let it toast for a minute to release flavors.</li>
                            <li>Add a splash of pasta water to create a sauce, and simmer for 5-10 minutes.</li>
                            <li>Toss the cooked pasta into the sauce and serve hot!</li>
                        </ol>
                    </div>
                </section>
            )}

        </main>
    )
}