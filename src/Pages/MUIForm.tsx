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
  firstName: string | null
  age: number | string
  gender: string
}

export default function MuiForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: { firstName: '', age: '', gender: 'other' },
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log({ data })
  }

  return (
    <Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            label="First Name"
            variant="outlined"
            margin="normal"
            {...field}
            error={!!errors.firstName && errors.firstName.type === 'required'}
            helperText={
              errors.firstName &&
              errors.firstName.type === 'required' &&
              'first name is a required field'
            }
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
        rules={{ min: 18, max: 99 }}
        render={({ field }) => (
          <TextField
            type="number"
            label="Age"
            variant="outlined"
            margin="normal"
            {...field}
            error={
              !!errors.age &&
              (errors.age.type === 'min' || errors.age.type === 'max')
            }
            helperText={
              errors.age &&
              (errors.age.type === 'min'
                ? 'minimum age is 18'
                : errors.age.type === 'max'
                ? 'maximum age is 99'
                : '')
            }
          />
        )}
      />

      <Button type="submit" variant="contained" color="secondary">
        submit
      </Button>
    </Box>
  )
}
