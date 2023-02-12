import { Box, Button, Stack } from "@mui/material";
import { useId } from "react";
import { useForm, SubmitHandler, Controller, Resolver } from "react-hook-form";
import { ControlledTextInput } from "../Components/Input/TextInput";
import { DevTool } from "@hookform/devtools";
import { ControlledNumberInput } from "../Components/Input/NumberInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ControlledDatePicker } from "../Components/Input/DatePicker";

type FormFields = {
  description: string | null;
  age: number | string;
  birthDate: Date;
};

const validationSchema = z.object({
  description: z.string().min(1, { message: "Description is required" }),
  age: z.number({ invalid_type_error: "Age must be a number" }),
  birthDate: z.date(),
});

export function Form() {
  const id = useId();
  const {
    control,
    formState: { dirtyFields, errors, touchedFields },
    handleSubmit,
    setValue,
    watch,
  } = useForm<FormFields>({
    defaultValues: { description: "", age: "" },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.table(data);
  };

  return (
    <>
      <Box
        id={id}
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="form"
      >
        <Stack spacing={2}>
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
          <ControlledDatePicker
            name="birthDate"
            control={control}
            label="birthdate"
            error={errors.birthDate}
          />

          <Button type="submit" variant="contained" color="success">
            submit
          </Button>
        </Stack>
      </Box>
      <DevTool control={control} />
    </>
  );
}
