import {useState} from "react"
import './App.css';

function App() {
  const initialValues = {username: '', email: '', password: ''}
  const [formValues, setformValues] = useState(initialValues)

  const handleChange = (e) => {
    const {name, value} = e.target
    setformValues({...formValues, [name]: value})
    console.log(formValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault()


  }

  return (
    <div className="container">
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <form onSubmit={handleSubmit}>  
        <h1>Login Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label>Username</label>
            <input 
              type="text" 
              name="usename" 
              placeholder='Username'
              value={formValues.username}
              onChange={handleChange}
              />
          </div>
          <div className='field'>
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder='Email'
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder='Password'
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <button className='fluid ui button blue'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
