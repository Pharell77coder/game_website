import './login.css';
import React, {useState} from 'react';
import axios from axios

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/login', {email, password})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Entrer votre email' 
            onChange={e => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Entrer votre password' 
            onChange={e => setPassword(e.target.value)}/>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
