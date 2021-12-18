import { ReactElement } from 'react';
import Button from '@mui/material/Button';

const Root: React.FC = (): ReactElement => {
  return (
    <>
      <h1>Root</h1>
      <Button variant="contained">LOGIN</Button>
    </>
  );
};

export default Root;
