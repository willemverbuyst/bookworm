import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

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
      <FormLabel style={{ color: "#a3a3a3", fontStyle: "italic" }}>
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Textarea {...field} />}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
