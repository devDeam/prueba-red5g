import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logoSufi from '../../assets/login/logoSufi.svg'
import USERS from '../../helpers/login/login.json';
import Spinner from 'react-bootstrap/Spinner';
import Modals from '../Components/Modals/Modals';

const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(USERS.users);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    "username": "",
    "password": "",
  });

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
  })
  }

  const cleanInputs = () => {
    const name : HTMLInputElement = (document.getElementById('username') as HTMLInputElement);
    name.value = ""
    const password : HTMLInputElement = (document.getElementById('password') as HTMLInputElement);
    password.value = ""
  }
  const LogIn = () => {
    if(form.username === users.username && form.password === users.password){
      setLoading(true)
      setTimeout(()=> {setLoading(false)
        navigate("/dashboard");}, 3000)
    } else {
      setLoading(true)
      setTimeout(()=> {setLoading(false)
      setError(true);
      }, 2000)
      setError(false);
      cleanInputs()

      return;
    }
  }
  return (
    <div className='login-container'>
      {error && <Modals title="Usuario / Contraseña incorrectos" 
      msg="Por favor, verífica tu nombre de usuario y/o contraseña e intenta nuevamente"/>}
    <div className='img-container'>
        <img src={logoSufi} alt=""/>
        <h2 className='title'>Sufipay</h2>
        <p className='subTitle'>Administrador comercial</p>
    </div>
    <div className="wrapper-login fadeInDown">
        <div id="formContent-login">
          <form className='form-login'>
            <input type="text" id="username" className="fadeIn second" name="username" placeholder="Usuario" 
            onChange={handleInputs}/>
            <input type="password" id="password" className="fadeIn third" name="password" placeholder="Contraseña" 
            onChange={handleInputs}/>
            <br />
          </form>
        <br />
        {loading ? <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    :<input type="button" value="INGRESAR" className='btn-ingresar'
        onClick={LogIn}/>} <br/><br/>
        <a href="http://" target="_blank" rel="noopener noreferrer">No recuerdo mi contraseña</a>
        </div>
      </div>
      
    </div>
  )
}

export default Login