import { FormControl, FormHelperText, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { INPUT_FORMAT_DATEPICKER } from "../../configuration/date";

type DatePickerProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  helperText?: string;
  label?: string;
  name: string;
  required?: boolean;
} & UseControllerProps<T>;

export function ControlledDatePicker<T extends FieldValues>({
  control,
  error,
  helperText,
  label,
  name,
  required = false,
}: DatePickerProps<T>) {
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
            inputFormat={INPUT_FORMAT_DATEPICKER}
            renderInput={(params: any) => <TextField {...params} />}
          />
        )}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
