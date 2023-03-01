import { FormControl, Textarea } from "@chakra-ui/react";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import HelperText from "./HelperText";
import Label from "./Label";

type TextAreaProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  helperText?: string | null;
  label?: string;
  name: string;
  required?: boolean;
} & UseControllerProps<T>;

function ControlledTextArea<T extends FieldValues>({
  control,
  error,
  helperText,
  label,
  name,
  required = false,
}: TextAreaProps<T>) {
  return (
    <FormControl isInvalid={!!error}>
      {label && <Label text={label} isRequired={required} />}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Textarea {...field} />}
      />
      {error?.message && <ErrorMessage text={error.message} />}
      {helperText && <HelperText text={helperText} />}
    </FormControl>
  );
}

export default ControlledTextArea;
