import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormErrorMessage,
  IconButton,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import HelperText from "./HelperText";
import Label from "./Label";

type Props = {
  onChange: (rating: number) => void;
};

const StarRating = React.forwardRef<HTMLDivElement, Props>(
  ({ onChange }, ref) => {
    const [rating, setRating] = useState(0);

    return (
      <Box ref={ref}>
        {[...Array(5)].map((_, index) => {
          const star = index + 1;
          return (
            <IconButton
              aria-label="star"
              colorScheme="whiteAlpha"
              key={star}
              icon={
                <StarIcon color={star <= rating ? "teal.600" : "gray.300"} />
              }
              onClick={() => {
                setRating(rating === star && rating > 0 ? rating - 1 : star);
                onChange(rating === star && rating > 0 ? rating - 1 : star);
              }}
            />
          );
        })}
      </Box>
    );
  }
);

type StarRatingProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  helperText?: string | null;
  label?: string;
  name: string;
  required?: boolean;
} & UseControllerProps<T>;

export function ControlledStarRating<T extends FieldValues>({
  control,
  error,
  helperText,
  label,
  name,
  required = false,
}: StarRatingProps<T>) {
  return (
    <FormControl isInvalid={!!error}>
      {label && <Label text={label} isRequired={required} />}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <StarRating {...field} />}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      {helperText && <HelperText text={helperText} />}
    </FormControl>
  );
}
