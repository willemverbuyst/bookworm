import { FormControl, Select } from "@chakra-ui/react";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { ErrorMessage, HelperText, Label } from "../Text";

type SelectProps<T extends FieldValues, U> = {
  dataSet: U[];
  error?: FieldError | undefined;
  helperText?: string | null;
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  allOption?: boolean;
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
  placeholder,
  required = false,
  allOption = false,
}: SelectProps<T, U>) {
  return (
    <FormControl isInvalid={!!error}>
      {label && <Label text={label} isRequired={required} />}
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <Select {...field}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <option key="genre" disabled value="">
              {placeholder}
            </option>
            {allOption && (
              <option key="all" value="all">
                All
              </option>
            )}
            {dataSet.map((option) => (
              <option key={option.value} value={option.value}>
                {option.display}
              </option>
            ))}
          </Select>
        )}
      />
      {error?.message && <ErrorMessage text={error.message} />}
      {helperText && <HelperText text={helperText} />}
    </FormControl>
  );
}
