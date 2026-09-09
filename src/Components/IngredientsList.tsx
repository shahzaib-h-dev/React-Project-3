import React from "react";

// TypeScript ko batana ke konsi props aayengi
type Props = {
    ingredients: string[];
    getRecipe: () => void;
    isLoading: boolean; // Nayi prop ko TypeScript mein define kiya
}

export function IngredientsList({ ingredients, getRecipe, isLoading }: Props) {
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            
            {ingredients.length > 3 && (
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button 
                        onClick={getRecipe} 
                        disabled={isLoading} // Agar loading chal rahi hai, toh button lock (disable) ho jayega
                        style={{ 
                            cursor: isLoading ? "not-allowed" : "pointer", 
                            opacity: isLoading ? 0.6 : 1 
                        }}
                    >
                        {/* Agar loading chal rahi hai toh text change ho jayega */}
                        {isLoading ? "Generating Recipe..." : "Get a recipe"} 
                    </button>
                </div>
            )}
        </section>
    )
}