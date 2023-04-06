import { useState } from "react";




const Form = () => {
    const [userData, setUserdata] = useState({
        email: '',
        password: ''
    })
    
    const handleOnChange = (event) => {
        setUserdata({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    return ( <form>
        
        <label htmlFor="email">Email: </label>
        <input placeholder="Ingrese su email" type="email" value={userData.email} onChange={handleOnChange}/>
    
        <label htmlFor="password">Password: </label>
        <input placeholder="Ingrese su contraseña" name="password" value={userData.password} onChange={handleOnChange}/>

        <button>Submit</button>
    </form>
    )
}

export default Form;