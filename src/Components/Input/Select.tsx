import {
  FormControl,
  FormHelperText,
  MenuItem,
  TextField,
} from "@mui/material";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

type SelectProps<T extends FieldValues, U> = {
  dataSet: U[];
  error?: FieldError | undefined;
  helperText?: string;
  label?: string;
  name: string;
  required?: boolean;
} & UseControllerProps<T>;

export function ControlledSelect<
  T extends FieldValues,
  U extends { value: string; display: string }
>({
  control,
  dataSet,
  error,
  helperText,
  label,
  name,
  required = false,
}: SelectProps<T, U>) {
  return (
    <FormControl sx={{ width: "50ch" }}>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <>
            <TextField
              {...field}
              label={label}
              select
              variant="outlined"
              error={!!error}
              helperText={error && error.message}
            >
              {dataSet.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.display}
                </MenuItem>
              ))}
            </TextField>
          </>
        )}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
