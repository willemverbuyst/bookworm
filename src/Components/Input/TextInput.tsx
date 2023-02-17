import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

type TextInputProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  helperText?: string;
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
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
