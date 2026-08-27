import React from "react"

export function Forms(){
    return(
        <>
         <section>
            <h1>Signup Form</h1>
           
            <form> 
                 <label htmlFor="email">Email: </label>
                <input id="email" type="email" name="email" placeholder="shahzaib@gmail.com"/>
                <br />
                <br />

                <label htmlFor="">Password: </label>
                <input id="password" type="password" name="password" />
                <br />
                <br />
                <button>Submit</button>           
           
            </form>
         </section>
        </>
    )
}