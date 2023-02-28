import { FormControl, FormErrorMessage, Textarea } from "@chakra-ui/react";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import HelperText from "./HelperText";
import Label from "./Label";

type TextAreaProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  helperText?: string | null;
  label?: string;
  name: string;
} & UseControllerProps<T>;

export function ControlledTextArea<T extends FieldValues>({
  control,
  error,
  helperText,
  label,
  name,
}: TextAreaProps<T>) {
  return (
    <FormControl isInvalid={!!error}>
      {label && <Label text={label} />}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Textarea {...field} />}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      {helperText && <HelperText text={helperText} />}
    </FormControl>
  );
}
