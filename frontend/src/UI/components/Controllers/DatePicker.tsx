import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import HelperText from "./HelperText";

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
      <FormLabel style={{ color: "#a3a3a3", fontStyle: "italic" }}>
        {label}
      </FormLabel>
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
