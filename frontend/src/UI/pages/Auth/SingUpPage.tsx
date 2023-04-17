import { Box, Button, Container, HStack, Text, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppState } from "../../../business/overmind";
import {
  ControlledSelect,
  ControlledTextInput,
} from "../../components/Controllers";
import { NavigationBar } from "../../components/Navigation";
import { PageTitle } from "../../components/Text";
import { useGetCountries } from "../../hooks/useGetCountries";
import {
  defaultValuesSignUp,
  FormfieldsSignUp,
  validationSchemaSignUp,
} from "./helpers";

export function SignUpPage() {
  useGetCountries();
  const id = useId();
  const dataSet = useAppState().country.overview || [];
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormfieldsSignUp>({
    defaultValues: defaultValuesSignUp,
    resolver: zodResolver(validationSchemaSignUp),
  });

  const { isSignedIn } = useAppState().auth;

  const onSubmit: SubmitHandler<FormfieldsSignUp> = async (data) => {
    // await signInUser(data);
    console.log(data);
    reset();
  };

  return (
    <>
      <NavigationBar />
      <Container centerContent>
        <PageTitle title="Sign Up" />

        {isSignedIn ? (
          <Box>
            <Text fontSize="3xl">you are already </Text>have an account
          </Box>
        ) : (
          <Box as="form" id={id} onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={6}>
              <HStack>
                <ControlledTextInput
                  name="firstName"
                  control={control}
                  label="first name"
                  error={errors.firstName}
                  required
                />
                <ControlledTextInput
                  name="lastName"
                  control={control}
                  label="last name"
                  error={errors.lastName}
                  required
                />
              </HStack>
              <ControlledTextInput
                name="email"
                control={control}
                label="email"
                error={errors.email}
                required
              />
              <ControlledTextInput
                name="phoneNumber"
                control={control}
                label="phone"
                error={errors.phoneNumber}
                required
              />
              <ControlledSelect
                dataSet={dataSet}
                name="country"
                control={control}
                label="country"
                error={errors.country}
                required
              />
              <ControlledTextInput
                name="password"
                control={control}
                label="password"
                error={errors.password}
                required
              />
              <Button type="submit" colorScheme="teal" size="sm">
                Submit
              </Button>
            </VStack>
          </Box>
        )}
      </Container>
    </>
  );
}
