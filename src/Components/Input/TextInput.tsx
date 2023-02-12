import { FormControl, TextField } from "@mui/material";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

type TextInputProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  label?: string;
  name: string;
  required?: boolean;
} & UseControllerProps<T>;

export function ControlledTextInput<T extends FieldValues>({
  control,
  error,
  label,
  name,
  required = false,
}: TextInputProps<T>) {
  return (
    <FormControl sx={{ width: "50ch" }}>
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
          />
        )}
      />
    </FormControl>
  );
}
