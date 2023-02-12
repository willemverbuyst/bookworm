import { FormControl, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
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

export function ControlledDatePicker<T extends FieldValues>({
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
          <DesktopDatePicker
            {...field}
            label={label}
            inputFormat="DD/MM/YYYY"
            renderInput={(params: any) => <TextField {...params} />}
          />
        )}
      />
    </FormControl>
  );
}
