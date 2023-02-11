import { FormControl, TextField } from '@mui/material'
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form'

type NumberInputProps<T extends FieldValues> = {
  error?: FieldError | undefined
  label?: string
  name: string
  required?: boolean
} & UseControllerProps<T>

export function ControlledNumberInput<T extends FieldValues>({
  control,
  error,
  label,
  name,
  required = false,
}: NumberInputProps<T>) {
  return (
    <FormControl sx={{ mb: 2, width: '50ch' }}>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            variant="outlined"
            error={!!error}
            helperText={error && error.message}
            type="number"
            onChange={(event) => field.onChange(parseInt(event.target.value))}
          />
        )}
      />
    </FormControl>
  )
}
