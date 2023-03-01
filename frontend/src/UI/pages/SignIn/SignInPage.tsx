import { useEffect, useId } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Button, Container, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppState, useActions } from "../../../business/overmind";
import { ControlledTextInput } from "../../components/Controllers/TextInput";
import { defaultValues, FormFields, validationSchema } from "./helpers";
import PageTitle from "../../components/Text/PageTitle";

function SignInPage() {
  const id = useId();
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormFields>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });
  const { signInUser } = useActions();
  const { isSignedIn } = useAppState();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await signInUser(data);
    reset();
  };

  useEffect(() => {
    if (isSignedIn) {
      navigate("/home");
    }
  }, [isSignedIn]);

  return (
    <Container centerContent>
      <PageTitle title="Sign In" />

      {isSignedIn ? (
        <Box>
          <Text fontSize="3xl">you are already logged in</Text>
        </Box>
      ) : (
        <Box as="form" id={id} onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={6}>
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
  );
}

export default SignInPage;
