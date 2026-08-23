export function Main(){
    
    const ingredients =["Chicken", "Oregano", "Tomatoes"]
    const ingredientListItems = ingredients.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event : any){
        event.preventDefault()
        console.log("Form submitted!")
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient as string)
        console.log(ingredients)

    }

    return<>
   <main className="mainTag">
    <form onSubmit={handleSubmit}  className="add-ingredient-form">
        <input 
        name="ingredient"
         type="text"
         placeholder="e.g. oregano"
         aria-label="Add ingredient"/>
        <button> Add ingredient</button>
    </form>
    <ul>
       {ingredientListItems}
    </ul>
   </main>
    
    </>
}