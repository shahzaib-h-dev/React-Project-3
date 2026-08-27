import React from "react";

export function Forms() {

    function signUp(formData: any){
     const data = Object.fromEntries(formData)
     const dietaryRestrictions = formData.getAll("dietaryRestrictions")
     const allData = {
        ...data, dietaryRestrictions 
     }
     console.log(allData)
    }

    return (
        <section className="signup-container">
            <h1 className="signup-title">Signup form</h1>
            
            <form action={signUp} className="signup-form"> 
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        id="email" 
                        type="email" 
                        name="email" 
                        defaultValue="shahzaibhassan@gmail.com"
                        placeholder="shahzaib@gmail.com" 
                        className="signup-input"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        id="password" 
                        type="password" 
                        name="password" 
                        defaultValue="12345678"
                        className="signup-input"
                    />
                </div>
                <div className="input-group">
                <label htmlFor="description"> Description:</label>
                <textarea name="description" id="description" defaultValue="This is a description"></textarea>
                </div>

                <br />
                <br />

            <fieldset className="radioFieldSet">
                <legend>Employment Status</legend>
               <label htmlFor="" className="radio"> 
                <input type="radio" name="employementStatus" value="unemployed" />
                Unemployed
               </label >

               <label htmlFor="" className="radio"> 
                <input type="radio" name="employementStatus" value="partTime" />
                Part-Time
               </label >

               <label htmlFor="" className="radio"> 
                <input type="radio" name="employementStatus" value="fullTime" />
                Full-Time
               </label >
            </fieldset>

            <fieldset className="radioFieldSet">
                <legend>Dietary restrictions: </legend>
               <label htmlFor="" className="radio"> 
                <input type="checkbox" name="dietaryRestrictions" value="koshar" />
                Koshar
               </label >

               <label htmlFor="" className="radio"> 
                <input type="checkbox" name="dietaryRestrictions" value="vegan" />
                Vegan
               </label >

               <label htmlFor="" className="radio"> 
                <input type="checkbox" name="dietaryRestrictions" value="glutenFree" />
                Gluten-Free
               </label >
            </fieldset>
  
            <label className="input-group" htmlFor="favColor">What is your favorite color ?</label> 
            <select id="favColor" name="favColor" defaultValue="">
                <option value="" disabled>-- Choose a color --</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="orange">Orange</option>
                <option value="brown">Brown</option>
                <option value="black">Black</option>
                <option value="blue">Blue</option>
            </select>
                <button type="button" className="signup-button">Submit</button>           
            </form>
        </section>
    );
}