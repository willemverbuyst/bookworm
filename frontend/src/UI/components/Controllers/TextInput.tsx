import { FormControl, Input } from "@chakra-ui/react";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { ErrorMessage, HelperText, Label } from "../Text";

type TextInputProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  helperText?: string | null;
  label?: string;
  name: string;
  required?: boolean;
} & UseControllerProps<T>;

export function ControlledTextInput<T extends FieldValues>({
  control,
  error,
  helperText,
  label,
  name,
  required = false,
}: TextInputProps<T>) {
  return (
    <FormControl isInvalid={!!error}>
      {label && <Label text={label} isRequired={required} />}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      {error?.message && <ErrorMessage text={error.message} />}
      {helperText && <HelperText text={helperText} />}
    </FormControl>
  );
}
