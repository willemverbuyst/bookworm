import { Box, Button } from '@mui/material'
import { useId } from 'react'
import { useForm, SubmitHandler, Controller, Resolver } from 'react-hook-form'
import { ControlledTextInput } from '../Components/Input/TextInput'
import { DevTool } from '@hookform/devtools'
import { ControlledNumberInput } from '../Components/Input/NumberInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type FormFields = {
  description: string | null
  age: number | string
  gender: string
}

const validationSchema = z.object({
  description: z.string().min(1, { message: 'Description is required' }),
  age: z.number({ invalid_type_error: 'Age must be a number' }),
})

export function Form() {
  const id = useId()
  const {
    control,
    formState: { dirtyFields, errors, touchedFields },
    handleSubmit,
    setValue,
    watch,
  } = useForm<FormFields>({
    defaultValues: { description: '', age: '' },
    resolver: zodResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.table(data)
  }

  return (
    <>
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
        <ControlledNumberInput
          name="age"
          control={control}
          label="age"
          error={errors.age}
        />

        <Button type="submit" variant="contained" color="success">
          submit
        </Button>
      </Box>
      <DevTool control={control} />
    </>
  )
}
