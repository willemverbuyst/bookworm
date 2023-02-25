import { useEffect, useId } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppState, useActions } from "../../../business/overmind";
import { ControlledTextInput } from "../../components/Controllers/TextInput";
import { defaultValues, FormFields, validationSchema } from "./helpers";

export default function SignInPage() {
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
  const { loginUser } = useActions();
  const { isLoggedIn } = useAppState();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await loginUser(data);
    reset();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn]);

  return (
    <Container centerContent>
      <Box>
        <Heading as="h1" size="lg">
          Sign In
        </Heading>
      </Box>
      {isLoggedIn ? (
        <Box>
          <Text fontSize="3xl">you are already logged in</Text>
        </Box>
      ) : (
        <Box as="form" id={id} onSubmit={handleSubmit(onSubmit)}>
          <VStack m={4}>
            <ControlledTextInput
              name="email"
              control={control}
              label="email"
              error={errors.email}
            />
            <ControlledTextInput
              name="password"
              control={control}
              label="password"
              error={errors.password}
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
