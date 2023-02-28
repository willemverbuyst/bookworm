import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import HelperText from "./HelperText";
import Label from "./Label";

type DatePickerProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  helperText?: string | null;
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
      {label && <Label text={label} />}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <SingleDatepicker
            date={field.value}
            onDateChange={(e: Date) => field.onChange(e)}
          />
        )}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      {helperText && <HelperText text={helperText} />}
    </FormControl>
  );
}
