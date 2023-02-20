import React, { ReactElement, useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Box, Button, Container, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppState, useActions } from "../../../business/overmind";
import { isValidEmail } from "../../../business/validators/email";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  // const navigate = useNavigate();
  // const {
  //   control,
  //   formState: { errors },
  //   handleSubmit,
  //   register,
  //   reset,
  // } = useForm<Inputs>();
  // const { loginUser } = useActions();
  // const { isLoggedIn } = useAppState();

  // const onSubmit: SubmitHandler<Inputs> = async (data) => {
  //   await loginUser(data);
  //   reset();
  // };

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate("/home");
  //   }
  // }, [isLoggedIn]);

  return (
    <Container>
      <Box>
        <Heading as="h1" size="lg">
          Login
        </Heading>
      </Box>
      {/* {isLoggedIn ? (
        <Box>you are already logged in</Box>
      ) : ( */}
      <Box>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflow: "hidden",
                margin: "auto",
              }}
            >
              <Box sx={{ marginTop: 3 }}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...field}
                      id="outlined-required"
                      label="email"
                      type="text"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register("email", {
                        validate: (value) => isValidEmail(value),
                      })}
                    />
                  )}
                />
                <Typography color="red" sx={{ mt: 1, textAlign: "center" }}>
                  {errors.email && "This is not a valid email buddy!"}
                </Typography>
              </Box>
              <Box sx={{ marginTop: 3 }}>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...field}
                      id="outlined-required"
                      label="password"
                      type="password"
                    />
                  )}
                />
                <Typography color="red" sx={{ mt: 1, textAlign: "center" }}>
                  {errors.password && "No password, no log in!"}
                </Typography>
              </Box>
              <Box sx={{ marginTop: 3 }}>
                <Button type="submit" variant="contained">
                  LOG IN
                </Button>
              </Box>
            </Box>
          </form> */}
      </Box>
      {/* )} */}
    </Container>
  );
}
