import { Box, Button, Container, Text, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppState } from "../../../business/overmind";
import { ControlledTextInput } from "../../components/Controllers";
import NavigationBar from "../../components/Navigation/NavigationBar";
import { PageTitle } from "../../components/Text";
import {
  defaultValuesSignUp,
  FormfieldsSignUp,
  validationSchemaSignUp,
} from "./helpers";

function SignUpPage() {
  const id = useId();
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
              <ControlledTextInput
                name="userName"
                control={control}
                label="username"
                error={errors.userName}
                required
              />
              <ControlledTextInput
                name="email"
                control={control}
                label="email"
                error={errors.email}
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

export default SignUpPage;
