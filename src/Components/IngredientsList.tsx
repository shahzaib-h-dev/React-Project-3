export function IngredientsList(props: { ingredients: string[], getRecipe: () => void }) {
    const ingredientListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    return (
        <section className="ingredients-section">
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list">{ingredientListItems}</ul>

            {props.ingredients.length > 3 && (
                <div className="recipe-container">
                    <div className="recipe-text">
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    {/* onClick par aapka API call wala function trigger hoga */}
                    <button onClick={props.getRecipe} className="get-recipe-btn">
                        Get a recipe
                    </button>
                </div>
            )}
        </section>
    );
}