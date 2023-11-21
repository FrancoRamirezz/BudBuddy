import { useState } from "react";
const Signup = () =>{
const [email, setEmail] = useState();
const [password, setPassword]= useState();
const handlesubmit = (e: React.FormEvent<HTMLInputElement>) =>{
// set the event within here because 
// typescipt makes sure that e must have a type behind 
    e.preventDefault();
    console.log(email)


}
