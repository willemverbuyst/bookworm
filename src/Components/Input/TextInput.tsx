import { TextField } from '@mui/material'
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form'

type TextInputProps<T extends FieldValues> = {
  error?: FieldError | undefined
  label?: string
  name: string
  required?: boolean
} & UseControllerProps<T>

export function ControlledTextInput<T extends FieldValues>({
  control,
  error,
  label,
  name,
  required = false,
}: TextInputProps<T>) {
  return (
    <section>
      {label && <label>{label}</label>}{' '}
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => <TextField {...field} />}
      />
      {error && <p className="error">{error.message}</p>}
    </section>
  )
}
