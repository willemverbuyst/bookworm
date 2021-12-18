import { ReactElement } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useActions, useAppState } from '../overmind';

const ButtonAppBar: React.FC = (): ReactElement => {
  const { isLoggedIn } = useAppState();
  const { loginUser, logoutUser } = useActions();

  const displayButton = () => {
    if (isLoggedIn) {
      return (
        <Button color="inherit" onClick={logoutUser}>
          Log out
        </Button>
      );
    } else {
      return (
        <Button color="inherit" onClick={loginUser}>
          Login
        </Button>
      );
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            BOOKWORM
          </Typography>
          {displayButton()}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
