

export function IngredientsList(props:{ingredients: string[], toggleRecipeShown: () => void}){    

 const ingredientListItems = props.ingredients.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))

    return(
        <>
        <h1> IngredientsList Components</h1>

         <section className="ingredients-section">
             <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list">{ingredientListItems}</ul>
                    
                {props.ingredients.length > 3 && 
                    <div className="recipe-container">
                    <div className="recipe-text">
                        <h3>Ready for a recipe? </h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.toggleRecipeShown} className="get-recipe-btn">Get a recipe</button>
                    </div>
                    }
          </section>
        </>
    )
}