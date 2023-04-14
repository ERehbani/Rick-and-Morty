import { useState } from "react";
import validation from "../../validation";


const Form = ({login}) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserdata] = useState({
        email: '',
        password: ''
    })

    
    const handleOnChange = (event) => {
        setUserdata({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return ( 
    <div className="form">
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <img className="form-image" src="https://mixmag.net/assets/uploads/images/_full/RICKMORTYLEADD.jpg" alt="" />
                <br />
                <label htmlFor="email">Email: </label>
                <input
                    name="email"
                    type="email" 
                    value={userData.email} 
                    onChange={handleOnChange} />
                {errors.email && <p>{errors.email}</p>}

                <br />

                <label htmlFor="password">Password: </label>
                <input 
                    name="password" 
                    value={userData.password} 
                    onChange={handleOnChange}/>
                {errors.password && <p>{errors.password}</p>}
                <br />
                <button>Submit</button>
            </form>
        </div>
    </div>
    )
}

export default Form;