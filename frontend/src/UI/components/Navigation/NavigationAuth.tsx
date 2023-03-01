import { Stack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useActions, useAppState } from "../../../business/overmind";

function NavigationAuth() {
  const navigate = useNavigate();
  const { isSignedIn } = useAppState();
  const { logOutUser } = useActions();

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
        as="a"
        fontSize="sm"
        fontWeight={400}
        variant="link"
        href="/signin"
      >
        Sign In
      </Button>
      <Button
        as="a"
        display={{ base: "none", md: "inline-flex" }}
        fontSize="sm"
        fontWeight={600}
        color="white"
        bg="pink.400"
        href="#"
        _hover={{
          bg: "pink.300",
        }}
      >
        Sign Up
      </Button>
    </Stack>
  );
}

export default NavigationAuth;
