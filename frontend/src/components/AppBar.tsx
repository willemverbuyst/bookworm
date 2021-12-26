import { ReactElement } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useActions, useAppState } from '../overmind';
import { useNavigate } from 'react-router-dom';

const ButtonAppBar: React.FC = (): ReactElement => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAppState();
  const { logoutUser } = useActions();

  const logOut = () => {
    logoutUser();
    navigate('/');
  };

  const displayButton = (): ReactElement | null => {
    if (isLoggedIn) {
      return (
        <Button color="inherit" onClick={logOut}>
          log out
        </Button>
      );
    } else {
      return null;
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
            onClick={logOut}
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
