import { FormControl, Select } from "@chakra-ui/react";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import HelperText from "./HelperText";
import Label from "./Label";

type SelectProps<T extends FieldValues, U> = {
  dataSet: U[];
  error?: FieldError | undefined;
  helperText?: string | null;
  label?: string;
  name: string;
  required?: boolean;
} & UseControllerProps<T>;

function ControlledSelect<
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
      {label && <Label text={label} isRequired={required} />}
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
      {error?.message && <ErrorMessage text={error.message} />}
      {helperText && <HelperText text={helperText} />}
    </FormControl>
  );
}

export default ControlledSelect;
