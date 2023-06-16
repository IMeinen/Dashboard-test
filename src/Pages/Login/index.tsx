import { useState,useCallback } from 'react';
import { Button, Checkbox, FormControlLabel, Fab } from '@mui/material';
import { Google, Apple, Facebook } from '@mui/icons-material';
import MaskedTextField from '../../Components/MaskedTextField';
import * as Styles from './styles';
import Logo from '../../../public/logo.svg'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [keepLogged, setKeepLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    if(email === 'admin@gmail.com' && password === 'admin123'){
      navigate("/dashboard");
    }
  },[email,password,navigate]);

  return (
    <Styles.MainContainer>
      <Styles.FormContainer>
        <img src={Logo}></img>
        <h1 className='title'>Welcome back!</h1>
        <p className='subtitle'>Enter your credentials to access your account</p>
        <Styles.FabContainer>
          <Fab color="error" variant="extended" size="medium" aria-label="login-with-google">
            <Google />
          </Fab>
          <Fab color="primary" variant="extended" size="medium" aria-label="login-with-facebook">
            <Facebook />
          </Fab>
          <Fab variant="extended" size="medium" aria-label="login-with-apple">
            <Apple />
          </Fab>
        </Styles.FabContainer>
        <MaskedTextField
          placeholder="example.email@gmail.com"
          label="Email"
          name='email'
          value={email}
          setValue={setEmail}
          validation={{
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Wrong email format',
          }}
        />
        <MaskedTextField
          placeholder="Enter at least 8+ characters"
          label="Password"
          hasHiddenButton
          name='password'
          value={password}
          setValue={setPassword}
          validation={{
            pattern: /^.{8,}$/,
            message: 'Password should have at least 8 characters',
          }}
        />


        <Styles.RadioContainer>
          <FormControlLabel control={<Checkbox value={keepLogged} onChange={() => setKeepLogged(!keepLogged)} />} label="Keep me logged in" />
          <span className='forgot-password'>Forgot password?</span>
        </Styles.RadioContainer>

        <Button style={{ width: 320 }} variant="contained" type="submit" onClick={handleLogin}>
          Login
        </Button>


      </Styles.FormContainer>

      <Styles.ImageContainer></Styles.ImageContainer>
    </Styles.MainContainer>
  );
};

export default Login;
