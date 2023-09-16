import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useId } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useActions, useAppState } from "../../../business/overmind";
import { Page } from "../../../configuration/navigation";
import { ControlledTextInput } from "../../components/Controllers";
import { PageTitle } from "../../components/Text";

const validationSchemaSignIn = z.object({
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type FormFieldsSignIn = z.infer<typeof validationSchemaSignIn>;

const defaultValuesSignIn: FormFieldsSignIn = {
  email: "",
  password: "",
};

export function SignInPage() {
  const id = useId();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormFieldsSignIn>({
    defaultValues: defaultValuesSignIn,
    resolver: zodResolver(validationSchemaSignIn),
  });
  const { isSignedIn } = useAppState().auth;
  const { signInUser } = useActions().auth;

  const onSubmit: SubmitHandler<FormFieldsSignIn> = async (data) => {
    await signInUser(data);
    reset();
  };

  useEffect(() => {
    if (isSignedIn) {
      page(Page.HOME);
    }
  }, [isSignedIn]);

  return (
    <Flex flexDirection="column" alignItems="center">
      <PageTitle title="Sign In" />

      {isSignedIn ? (
        <Box>
          <Text fontSize="3xl">you are logged in</Text>
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
    </Flex>
  );
}
