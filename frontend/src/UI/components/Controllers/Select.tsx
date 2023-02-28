import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

type SelectProps<T extends FieldValues, U> = {
  dataSet: U[];
  error?: FieldError | undefined;
  helperText?: string | null;
  label?: string;
  name: string;
  required?: boolean;
} & UseControllerProps<T>;

export function ControlledSelect<
  T extends FieldValues,
  U extends { value: string; display: string }
>({
  control,
  dataSet,
  error,
  helperText,
  label,
  name,
  required = false,
}: SelectProps<T, U>) {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel style={{ color: "#a3a3a3", fontStyle: "italic" }}>
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <Select {...field}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <option key="none" />
            {dataSet.map((option) => (
              <option key={option.value} value={option.value}>
                {option.display}
              </option>
            ))}
          </Select>
        )}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      <FormHelperText fontSize="xs" color="gray.400">
        {helperText}
      </FormHelperText>
    </FormControl>
  );
}