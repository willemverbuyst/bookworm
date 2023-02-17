import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

type DatePickerProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  helperText?: string;
  label?: string;
  name: string;
} & UseControllerProps<T>;

export function ControlledDatePicker<T extends FieldValues>({
  control,
  error,
  helperText,
  label,
  name,
}: DatePickerProps<T>) {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <SingleDatepicker
            date={field.value}
            onDateChange={(e) => field.onChange(e)}
          />
        )}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
