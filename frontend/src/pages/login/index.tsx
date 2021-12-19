import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { control, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
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
  );
};

export default Login;
