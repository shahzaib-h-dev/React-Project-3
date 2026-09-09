export function IngredientsList(props: { ingredients: string[], getRecipe: () => void, isLoading: boolean }) {
    const ingredientListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    return (
        <section className="ingredients-section">
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list">{ingredientListItems}</ul>

            {props.ingredients.length > 3 && (
                <div className="recipe-container">
                    
                    
                    <div className="recipe-text-content">
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    
                    <button 
                        onClick={props.getRecipe} 
                        className="get-recipe-btn"
                        disabled={props.isLoading} 
                        style={{ 
                            cursor: props.isLoading ? "not-allowed" : "pointer",
                            opacity: props.isLoading ? 0.7 : 1 
                        }}
                    >
                        {props.isLoading ? "Generating Recipe..." : "Get a recipe"}
                    </button>
                </div>
            )}
        </section>
    );
}