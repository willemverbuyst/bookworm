import {
  FormControl,
  Button,
  Box,
  TextField,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

interface IFormInput {
  firstName: string
  age: number
  gender: string
}

export default function MuiForm() {
  const { control, handleSubmit } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log({ data })
  }

  return (
    <Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            label="First Name"
            variant="outlined"
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <FormControl {...field} margin="normal">
            <FormLabel id="gender-radio-buttons-group">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="gender-radio-buttons-group"
              defaultValue="other"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        )}
      />

      <Controller
        name="age"
        control={control}
        defaultValue={18}
        render={({ field }) => (
          <TextField
            type="number"
            inputProps={{ min: 18, max: 99 }}
            label="Age"
            variant="outlined"
            margin="normal"
            {...field}
          />
        )}
      />

      <Button type="submit" variant="contained" color="secondary">
        submit
      </Button>
    </Box>
  )
}
