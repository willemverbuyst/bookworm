import { FormControl, TextField } from '@mui/material'

export default function TextInput({ field }: any) {
  return (
    <FormControl>
      <TextField label="test" variant="outlined" margin="dense" {...field} />
    </FormControl>
  )
}
