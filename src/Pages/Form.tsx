import { Box, Button } from '@mui/material'
import { useId } from 'react'
import { useForm, SubmitHandler, Controller, Resolver } from 'react-hook-form'
import { ControlledTextInput } from '../Components/Input/TextInput'

type FormFields = {
  description: string | null
  age: number | string
  gender: string
}

const resolver: Resolver<FormFields> = async (values) => {
  return {
    values: values.description ? values : {},
    errors: !values.description
      ? {
          description: {
            type: 'required',
            message: 'This is field is requried yo!',
          },
        }
      : {},
  }
}

export function Form() {
  const id = useId()
  const {
    control,
    formState: { dirtyFields, errors, touchedFields },
    handleSubmit,
    setValue,
    watch,
  } = useForm<FormFields>({
    defaultValues: { description: '' },
    resolver,
  })

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log({ data })
  }

  return (
    <Box
      id={id}
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="form"
    >
      <ControlledTextInput
        name="description"
        control={control}
        label="description"
        error={errors.description}
      />

      <Button type="submit" variant="contained" color="success" sx={{ mt: 3 }}>
        submit
      </Button>
    </Box>
  )
}
