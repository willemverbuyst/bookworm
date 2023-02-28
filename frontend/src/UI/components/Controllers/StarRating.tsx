import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  IconButton,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

type StarRatingProps<T extends FieldValues> = {
  error?: FieldError | undefined;
  helperText?: string | null;
  label?: string;
  name: string;
} & UseControllerProps<T>;

export default function StarRating({
  onChange,
}: {
  onChange: (rating: number) => void;
}) {
  const [rating, setRating] = useState(0);

  return (
    <Box>
      {[...Array(5)].map((_, index) => {
        const star = index + 1;
        return (
          <IconButton
            aria-label="star"
            colorScheme="whiteAlpha"
            key={star}
            icon={<StarIcon color={star <= rating ? "teal.600" : "gray.300"} />}
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

export function ControlledStarRating<T extends FieldValues>({
  control,
  error,
  helperText,
  label,
  name,
}: StarRatingProps<T>) {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel style={{ color: "#a3a3a3", fontStyle: "italic" }}>
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <StarRating {...field} />}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      <FormHelperText fontSize="xs" color="gray.400">
        {helperText}
      </FormHelperText>
    </FormControl>
  );
}
