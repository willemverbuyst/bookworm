import { FormControl } from "@chakra-ui/react";
import { OptionBase, Select } from "chakra-react-select";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { ErrorMessage, HelperText, Label } from "../Text";

type SelectProps<
  T extends FieldValues,
  U extends { value: string; display: string }
> = {
  dataSet: U[];
  error?: FieldError | undefined;
  helperText?: string | null;
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  allOption?: boolean;
  informAction?: () => void;
} & UseControllerProps<T>;

interface SelectOptions extends OptionBase {
  label: string;
  value: string;
}

export function ControlledSelectWithSearch<
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
  informAction,
}: SelectProps<T, U>) {
  const options: SelectOptions[] = dataSet.map((i) => ({
    value: i.value,
    label: i.display,
  }));

  return (
    <FormControl isInvalid={!!error}>
      {label && (
        <Label text={label} isRequired={required} informAction={informAction} />
      )}
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <Select<SelectOptions>
            useBasicStyles
            isMulti={false}
            {...field}
            name={name}
            options={options}
            placeholder={placeholder}
            closeMenuOnSelect={false}
          />
        )}
      />
      {error?.message && <ErrorMessage text={error.message} />}
      {helperText && <HelperText text={helperText} />}
    </FormControl>
  );
}
