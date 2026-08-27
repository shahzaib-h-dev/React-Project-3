import React from "react";

export function Forms() {

    function handleSubmit(event: any){
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const email = formData.get("email")
        console.log(email)
        formEl.reset()

    }

    return (
        <section className="signup-container">
            <h1 className="signup-title">Signup form</h1>
            
            <form onSubmit={handleSubmit} className="signup-form" method="post"> 
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        id="email" 
                        type="email" 
                        name="email" 
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
                        className="signup-input"
                    />
                </div>
                
                <button type="button" className="signup-button">Submit</button>           
            </form>
        </section>
    );
}