import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import HelperText from "./HelperText";

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
      <FormLabel style={{ color: "#a3a3a3", fontStyle: "italic" }}>
        {label}
      </FormLabel>
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
