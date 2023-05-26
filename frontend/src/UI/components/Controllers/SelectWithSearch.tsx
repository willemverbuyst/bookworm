import { FormControl } from "@chakra-ui/react";
import { AsyncSelect, OptionBase } from "chakra-react-select";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { ErrorMessage, HelperText, Label } from "../Text";

type SelectProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  helperText?: string | null;
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  allOption?: boolean;
  informAction?: () => void;
  action: ({
    inputValue,
  }: {
    inputValue: string;
  }) => Promise<Promise<SelectOptions[]>>;
} & UseControllerProps<T>;

interface SelectOptions extends OptionBase {
  label: string;
  value: string;
}

export function ControlledSelectWithSearch<T extends FieldValues>({
  control,
  error,
  helperText,
  label,
  name,
  placeholder,
  required = false,
  informAction,
  action,
}: SelectProps<T>) {
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
          <AsyncSelect<SelectOptions>
            useBasicStyles
            isMulti={false}
            {...field}
            name={name}
            placeholder={placeholder}
            closeMenuOnSelect={false}
            loadOptions={(inputValue, callback) => {
              action({ inputValue })
                .then((v) => v)
                .then((v) => callback(v));
            }}
            onChange={() => console.log("field :>> ", field)}
          />
        )}
      />
      {error?.message && <ErrorMessage text={error.message} />}
      {helperText && <HelperText text={helperText} />}
    </FormControl>
  );
}
