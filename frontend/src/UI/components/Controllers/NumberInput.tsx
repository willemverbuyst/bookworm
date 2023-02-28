import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import HelperText from "./HelperText";

type NumberInputProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  helperText?: string | null;
  label?: string;
  name: string;
} & UseControllerProps<T>;

export function ControlledNumberInput<T extends FieldValues>({
  control,
  error,
  helperText,
  label,
  name,
}: NumberInputProps<T>) {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel style={{ color: "#a3a3a3", fontStyle: "italic" }}>
        {label}
      </FormLabel>
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
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      {helperText && <HelperText text={helperText} />}
    </FormControl>
  );
}
