export function ClaudeRecipe(){
    return(<div>

         <h1> Claude Recipe</h1>

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
     </div>
    )
}