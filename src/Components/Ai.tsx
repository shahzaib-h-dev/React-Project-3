export function Ai(){


    const SYSTEM_PROMPT = `You are an assistance that receive a list of ingrdients that a user has and suggest a recipe tehy could make with some or all of these ingredients. You don't need to use every ingredient they one mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
    `

    export async function getRecipeFromMistral(ingredientArr){
        const ingredientsString = ingredientsArr.join(", ")
        try{
        const msg = await hfToken.chatCompletion({
            model: "mistralai/Mixtral-8x78-Instruct-v0.1",
            messages: [
                {role: "system", content: SYSTEM_PROMPT},
                {role: "user", content: `I have $(ingredientsString), Please give me a recipe you'd recommend I make!`},
                ]
                max_token:1024,
            })
        return Response.choice[0].message.content
        } catch(err){
            console.error(err.message)
        }
            }

    const hfToken = import.meta.env.VITE_HF_ACCESS_TOKEN;        

    return(
        <>
        </>
    )
}