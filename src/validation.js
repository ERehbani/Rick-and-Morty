import Form from "./components/Form";

const validate = (form, errors, setErrors) => {
    if(!/\S+@\S+\.\S+/.test(form.email)){
        setErrors({
            ...errors,
            email: 'por favor, revisa tu email, rey/reina'
        })
    }
    else setErrors({...errors, email: ''})

    if(form.password.length < 6){
        setErrors({
            ...errors,
            password: 'tiene que tener un mínimo de 6 caracteres'
        })
    }
    else setErrors({...errors, password: ''})
}




export default validate