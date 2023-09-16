import {
  Box,
  Button,
  Container,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useAppState } from "../../../business/overmind";
import { LibraryDetailsCard } from "../../components/Cards/LibraryDetailsCard";
import {
  ControlledSelect,
  ControlledTextInput,
} from "../../components/Controllers";
import { BookwormModal } from "../../components/Modal/BookwormModal";
import { PageTitle } from "../../components/Text";

const validationSchemaSignUp = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phoneNumber: z.string().regex(/^\+\d{11}$/),
  email: z.string().email().min(1, { message: "Email is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  library: z.string().min(1, { message: "Library is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type FormfieldsSignUp = z.infer<typeof validationSchemaSignUp>;

const defaultValuesSignUp: FormfieldsSignUp = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  country: "",
  library: "",
  password: "",
};

export function SignUpPage() {
  const id = useId();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dataSetCountries = useAppState().country.selectOptions || [];
  const dataSetLibraries = useAppState().library.selectOptions || [];
  const details = useAppState().library.overview || [];
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
              dataSet={dataSetCountries}
              name="country"
              control={control}
              label="country"
              error={errors.country}
              required
            />
            <BookwormModal
              isOpen={isOpen}
              onClose={onClose}
              header="Library"
              modalBody={
                details.length ? (
                  <>
                    {details.map((i) => (
                      <LibraryDetailsCard key={i.id} library={i} />
                    ))}
                  </>
                ) : null
              }
            />
            <ControlledSelect
              dataSet={dataSetLibraries}
              name="library"
              control={control}
              label="library"
              error={errors.library}
              required
              informAction={onOpen}
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
