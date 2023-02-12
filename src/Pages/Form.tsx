import { Box, Button, Stack } from "@mui/material";
import { useId } from "react";
import { useForm, SubmitHandler, Controller, Resolver } from "react-hook-form";
import { ControlledTextInput } from "../Components/Input/TextInput";
import { DevTool } from "@hookform/devtools";
import { ControlledNumberInput } from "../Components/Input/NumberInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ControlledDatePicker } from "../Components/Input/DatePicker";
import { ControlledSelect } from "../Components/Input/Select";
import { dummyDataSet1 } from "../dummyData/select";

type FormFields = {
  description: string | null;
  startDate: Date;
  endDate: Date;
  duration: number | string;
  country: string;
};

const validationSchema = z.object({
  description: z.string().min(1, { message: "Description is required" }),
  startDate: z.date(),
  endDate: z.date(),
  duration: z.number({ invalid_type_error: "Duration must be a number" }),
  country: z.string(),
});

export function Form() {
  const id = useId();
  const {
    control,
    formState: { dirtyFields, errors, touchedFields },
    handleSubmit,
    setValue,
    watch,
  } = useForm<FormFields>({
    defaultValues: { description: "", duration: "", country: "" },
    resolver: zodResolver(validationSchema),
  });

  const countries = dummyDataSet1.data.map((i) => ({
    value: i.value,
    display: i.value,
  }));

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.table(data);
  };

  return (
    <>
      <Box
        id={id}
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="form"
      >
        <h3>your dream trip</h3>
        <Stack spacing={2}>
          <ControlledTextInput
            name="description"
            control={control}
            label="description"
            error={errors.description}
          />
          <ControlledDatePicker
            name="startDate"
            control={control}
            label="startdate"
            error={errors.startDate}
          />
          <ControlledDatePicker
            name="endDate"
            control={control}
            label="enddate"
            error={errors.endDate}
          />
          <ControlledNumberInput
            name="duration"
            control={control}
            label="duration"
            error={errors.duration}
          />
          <ControlledSelect
            dataSet={countries}
            name="country"
            control={control}
            label="country"
            error={errors.country}
          />

          <Button type="submit" variant="contained" color="success">
            submit
          </Button>
        </Stack>
      </Box>
      <DevTool control={control} />
    </>
  );
}
