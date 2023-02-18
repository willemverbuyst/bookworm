import { Box, Button, VStack } from "@chakra-ui/react";
import { useId } from "react";
import { useForm, SubmitHandler, Controller, Resolver } from "react-hook-form";
import { ControlledTextInput } from "../Components/Input/TextInput";
import { DevTool } from "@hookform/devtools";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { dummyDataSet1 } from "../dummyData/select";
import { ControlledNumberInput } from "../Components/Input/NumberInput";
import { ControlledDatePicker } from "../Components/Input/DatePicker";
import { ControlledSelect } from "../Components/Input/Select";

type FormFields = {
  description: string | null;
  startDate: Date;
  endDate: Date;
  duration: number | string;
  country: string;
  city: string;
};

const validationSchema = z.object({
  description: z.string().min(1, { message: "Description is required" }),
  startDate: z.date({
    required_error: "isrequired",
    invalid_type_error: "Start date must be a date",
  }),
  endDate: z.date({
    required_error: "req",
    invalid_type_error: "End date must be a date",
  }),
  duration: z.number({ invalid_type_error: "Duration must be a number" }),
  country: z.string(),
  city: z.string(),
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
    defaultValues: {
      description: "",
      duration: "",
      country: "",
      startDate: new Date(),
      endDate: undefined,
    },
    resolver: zodResolver(validationSchema),
  });

  const [description, startDate, endDate, duration, country, city] = watch([
    "description",
    "startDate",
    "endDate",
    "duration",
    "country",
    "city",
  ]);

  const countries = dummyDataSet1.data.map((i) => ({
    value: i.value,
    display: i.value,
  }));
  const cities = (
    dummyDataSet1.data.find((c) => c.value === country)?.subSet ?? {
      value: [],
      tag: "",
    }
  ).value.map((i) => ({
    value: i,
    display: i,
  }));

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    // @ts-ignore
    Object.entries(data).forEach(([k, v]) => (data[k] = String(v)));
    console.table(data);
  };

  return (
    <>
      <Box as="form" id={id} onSubmit={handleSubmit(onSubmit)} className="form">
        <h3>your dream trip</h3>
        <VStack>
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
            helperText={country ? null : "Select a country, next select city"}
          />
          {country && (
            <ControlledSelect
              dataSet={cities}
              name="city"
              control={control}
              label="city"
              error={errors.city}
            />
          )}
          <Button type="submit" colorScheme="teal" size="sm">
            submit
          </Button>
        </VStack>
      </Box>
      <DevTool control={control} />
    </>
  );
}
