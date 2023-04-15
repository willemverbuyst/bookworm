import { FormControl } from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { ErrorMessage, HelperText, Label } from "../Text";

type DatePickerProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  helperText?: string | null;
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
    <FormControl isInvalid={!!error}>
      {label && <Label text={label} isRequired={required} />}
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
      {error?.message && <ErrorMessage text={error.message} />}
      {helperText && <HelperText text={helperText} />}
    </FormControl>
  );
}
