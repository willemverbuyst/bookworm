import { Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { Link as RLink } from "react-router-dom";
import { useActions, useAppState } from "../../../business/overmind";

export function NavigationAuth() {
  const navigate = useNavigate();
  const { isSignedIn } = useAppState().auth;
  const { logOutUser } = useActions().user;

  const handleSignOut = () => {
    navigate("/");
    logOutUser();
  };

  return isSignedIn ? (
    <Button
      display={{ base: "none", md: "inline-flex" }}
      fontSize="sm"
      fontWeight={600}
      color="white"
      bg="pink.400"
      _hover={{
        bg: "pink.300",
      }}
      onClick={handleSignOut}
    >
      Sign Out
    </Button>
  ) : (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify="flex-end"
      direction="row"
      spacing={6}
    >
      <Button
        as={RLink}
        fontSize="sm"
        fontWeight={400}
        variant="link"
        to="/signin"
      >
        Sign In
      </Button>
      <Button
        as={RLink}
        display={{ base: "none", md: "inline-flex" }}
        fontSize="sm"
        fontWeight={600}
        color="white"
        bg="pink.400"
        to="/signup"
        _hover={{
          bg: "pink.300",
        }}
      >
        Sign Up
      </Button>
    </Stack>
  );
}
