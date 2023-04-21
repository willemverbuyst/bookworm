import { Button, Stack } from "@chakra-ui/react";
import page from "page";
import { useActions, useAppState } from "../../../business/overmind";

export function NavigationAuth() {
  const { isSignedIn } = useAppState().auth;
  const { logOutUser } = useActions().auth;

  const handleSignOut = () => {
    page("/books");
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
        href="/signin"
        fontSize="sm"
        fontWeight={400}
        variant="link"
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
        href="/signup"
        _hover={{
          bg: "pink.300",
        }}
      >
        Sign Up
      </Button>
    </Stack>
  );
}
