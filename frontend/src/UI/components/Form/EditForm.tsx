import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

export function EditForm({
  id,
  onCancel,
  onClose,
  formLabel,
  initialValue,
  updateValue,
}: {
  id: string;
  onCancel: () => void;
  onClose: () => void;
  formLabel: string;
  initialValue: string;
  updateValue: (payload: {
    id: string;
    name: string;
  }) => Promise<Promise<void>>;
}) {
  const [value, setValue] = useState(initialValue);

  const submit = () => {
    updateValue({ id, name: value });
    onClose();
  };

  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel htmlFor="inputField">{formLabel}</FormLabel>
        <Input
          id="inputField"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </FormControl>
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={submit}>Save</Button>
      </ButtonGroup>
    </Stack>
  );
}
