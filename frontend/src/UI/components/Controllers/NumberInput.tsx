import {
  FormControl,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { ErrorMessage, HelperText, Label } from "../Text";

type NumberInputProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  helperText?: string | null;
  label?: string;
  name: string;
  required?: boolean;
} & UseControllerProps<T>;

export function ControlledNumberInput<T extends FieldValues>({
  control,
  error,
  helperText,
  label,
  name,
  required = false,
}: NumberInputProps<T>) {
  return (
    <FormControl isInvalid={!!error}>
      {label && <Label text={label} isRequired={required} />}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <NumberInput
            {...field}
            onChange={(value) => field.onChange(Number(value))}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        )}
      />
      {error?.message && <ErrorMessage text={error.message} />}
      {helperText && <HelperText text={helperText} />}
    </FormControl>
  );
}
