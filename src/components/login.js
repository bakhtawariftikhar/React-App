import React, { useState, } from 'react';
import {database} from '../components/firebase'
import "./style.css"
import {ref,push,child,update} from "firebase/database";
import loginImg from "../components/img-01.png";
const Login = () => {
 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleInputChange = (e) => {
      const {id , value} = e.target;
    
      if(id === "email"){
          setEmail(value);
      }
      if(id === "password"){
          setPassword(value);
      }
     

  }

  const handleSubmit  = () => {
    
      let obj = {
       
              email:email,
              password:password,
             
          }       
      const newPostKey = push(child(ref(database), 'posts')).key;
      const updates = {};
      updates['/' + newPostKey] = obj
      return update(ref(database), updates);
  }
    
  

  return(
    <div className="content">
    <div className="image">
      <img src={loginImg} alt=""/> 
    </div>
          
      <div className="form">
          <div className="form-body">
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
              </div>
           
          </div>
          <div class="footer">
              <button onClick={()=>handleSubmit()} type="submit" class="btn">Login</button>
        
                
          </div>
      </div>
     </div>
  )       
}

export default Login
               
