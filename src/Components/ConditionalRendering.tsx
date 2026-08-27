import { Jokes } from "./Jokes"
import JokesData from "./JokesData"

export function ConditionalRendering(){

    const jokeElements = JokesData.map(joke => {
        return(
            <Jokes
            key={joke.id}
            setup={joke.setup}
            punchline={joke.punchline}
            />
        )
    })
    return(
        <>
        <div>
            {jokeElements}
        </div>
        </>
    )
}