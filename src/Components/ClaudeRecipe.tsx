
interface ClaudeRecipeProps {
    recipe: string;
}

export function ClaudeRecipe({ recipe }: ClaudeRecipeProps) {
    
const formatText = (text: string) => {
    return text
        .replace(/^###?\s(.*$)/gim, '<h3 style="color: #d97706; margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid #ccc; padding-bottom: 5px;">$1</h3>')
        
        .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #92400e;">$1</strong>')
        
        .replace(/^[\*-]\s(.*$)/gim, '<li style="margin-left: 24px; margin-bottom: 6px; list-style-type: disc;">$1</li>')
        
        .replace(/^\d+\.\s(.*$)/gim, '<li style="margin-left: 24px; margin-bottom: 6px; list-style-type: decimal;">$1</li>');
};

    return (
        <section className="suggested-recipe-container">
            <h2>Suggested Recipe</h2>
            
            <div 
                style={{ whiteSpace: "pre-wrap", lineHeight: "1.6", marginTop: "15px" }}
                dangerouslySetInnerHTML={{ __html: formatText(recipe) }} 
            />
            
        </section>
    );
}