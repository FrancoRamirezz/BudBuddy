import { useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
'use client'
const Signup = () =>{
const [username, setUsername] = useState();
const [password, setPassword]= useState();
// set the event within here because 
// typescipt makes sure that e must have a type behind 
const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('Login details:', { username, password });
  // Implement login logic here
};
