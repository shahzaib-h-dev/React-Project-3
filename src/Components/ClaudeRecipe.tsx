export function ClaudeRecipe(props: any) {
    return (
        <section className="suggested-recipe-section" aria-live="polite">
            <h2>Suggested Recipe</h2>
            {/* AI ki generate ki hui recipe yahan show hogi */}
            <div className="recipe-content">
                {props.recipe}
            </div>
        </section>
    );
}