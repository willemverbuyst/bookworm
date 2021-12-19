import { Button } from '@mui/material';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

const Root: React.FC = (): ReactElement => {
  const navigate = useNavigate();

  const gotoLogin = () => navigate('/login');

  return (
    <>
      <h1>Home</h1>
      <Button onClick={gotoLogin}>Go to login page</Button>
    </>
  );
};

export default Root;
