/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { signIn } from '../../redux/actions';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doSignIn = () => {
    dispatch(signIn(true));
    navigate('/dasboard/wallet');
  };
  const [errorMessages, setErrorMessages] = useState({});
  const { isAuth } = useSelector((state) => state.authReducer);

  // User Login info
  const { database } = useSelector((state) => state.authReducer);

  const errors = {
    email: 'Invalid username',
    password: 'Invalid password',
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = document.forms[0];

    const userData = database.find((user) => user.email === email.value);
    if (userData) {
      if (userData.password !== password.value) {
        setErrorMessages({ name: 'password', message: errors.password });
      } else {
        doSignIn();
      }
    } else {
      setErrorMessages({ name: 'email', message: errors.email });
    }
  };

  const renderErrorMessage = (name) => name === errorMessages.name && (
    <Alert severity="error">{errorMessages.message}</Alert>
  );

  const _onInit = (auth2) => {
    console.log('init OK', auth2);
  };
  const _onError = (err) => {
    console.log('error', err);
  };
  window.gapi.load('auth2', () => {
    window.gapi.auth2
      .init({ // не забудьте указать ваш ключ в .env
        client_id:
          process.env.REACT_APP_GOOGLE_CLIENT_ID,
      })
      .then(_onInit, _onError);
  });

  const googleSignIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      // метод возвращает объект пользователя
      // где есть все необходимые нам поля
      const profile = googleUser.getBasicProfile();
      console.log(`ID: ${profile.getId()}`); // не посылайте подобную информацию напрямую, на ваш сервер!
      console.log(`Full Name: ${profile.getName()}`);
      console.log(`Given Name: ${profile.getGivenName()}`);
      console.log(`Family Name: ${profile.getFamilyName()}`);
      console.log(`Image URL: ${profile.getImageUrl()}`);
      console.log(`Email: ${profile.getEmail()}`);

      // токен
      const { idToken } = googleUser.getAuthResponse();
      console.log(`ID Token: ${idToken}`);
    });
  };
  // const googleSignOut = () => {
  //   const auth2 = window.gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(() => {
  //     console.log('User signed out.');
  //   });
  // };

  const renderForm = (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      {renderErrorMessage('email')}
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      {renderErrorMessage('password')}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 1 }}
      >
        Sign In
      </Button>
      <Button
        onClick={googleSignIn}
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 1 }}
      >
        Sign In With Google
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="/signup" variant="body2">
            Dont have an account? Sign Up
          </Link>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {isAuth ? <div>User is successfully logged in</div> : renderForm}
      </Box>
    </Container>
  );
}

export default SignIn;
