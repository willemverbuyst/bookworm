import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import HelperText from "./HelperText";
import Label from "./Label";

type TextInputProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  helperText?: string | null;
  label?: string;
  name: string;
} & UseControllerProps<T>;

export function ControlledTextInput<T extends FieldValues>({
  control,
  error,
  helperText,
  label,
  name,
}: TextInputProps<T>) {
  return (
    <FormControl isInvalid={!!error}>
      {label && <Label text={label} />}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      {helperText && <HelperText text={helperText} />}
    </FormControl>
  );
}
