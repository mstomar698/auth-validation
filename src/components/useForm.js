import {useState, useEffect } from "react";
import validation from "./validation";

const useForm = (submitForm) => {
    const [values, setValues] =useState({
        name:"",
        email:"",
        password:"",
    }); 
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setdataIsCorrect] = useState(false);  
    const handleChange = (event) =>{
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };
    const handleFormSubmit = (event) => {
      event.preventDefault();
      setErrors(validation(values));
      setdataIsCorrect(true);  
    };  
    useEffect(() =>{
      if(Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true); 
      }
    }, [errors]);
    return { handleChange, handleFormSubmit, errors, values };
};
export default useForm;