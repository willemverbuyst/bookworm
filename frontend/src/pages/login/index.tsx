import React, { useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useAppState, useActions } from '../../overmind';
import { useNavigate } from 'react-router-dom';

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<Inputs>();
  const { loginUser } = useActions();
  const { isLoggedIn, appErrors } = useAppState();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/books');
    }
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    loginUser(data);
  };

  const displayErrorMessage = () => (
    <p className="error">{appErrors.loginForm}</p>
  );

  return (
    <>
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'hidden',
            margin: 'auto',
          }}
        >
          <Box sx={{ marginTop: 3 }}>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-required"
                  label="email"
                  type="email"
                />
              )}
            />
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-required"
                  label="password"
                  type="password"
                />
              )}
            />
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <Button type="submit" variant="contained">
              LOG IN
            </Button>
          </Box>
        </Box>
      </form>
      {appErrors.loginForm ? displayErrorMessage() : null}
    </>
  );
};

export default Login;
