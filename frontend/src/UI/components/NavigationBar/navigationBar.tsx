/* eslint-disable react/jsx-props-no-spreading */
// import * as React from "react";
// import { useNavigate } from "react-router-dom";
// import { useActions, useAppState } from "../../../business/overmind";

// const pages = ["home", "books", "authors", "review"];

// const ResponsiveAppBar = () => {
//   const navigate = useNavigate();
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
//     null
//   );

//   const { logoutUser } = useActions();
//   const { isLoggedIn } = useAppState();

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(null);
//     navigate(`/${event.currentTarget.textContent}`);
//   };

//   const handleLogout = () => logoutUser();

//   const handleLogin = () => navigate("/login");

//   return (
//     <p>app bar</p>
// <AppBar position="static">
//   <Container maxWidth="xl">
//     <Toolbar disableGutters>
//       <Typography
//         variant="h6"
//         noWrap
//         component="div"
//         sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
//       >
//         BOOKWORM
//       </Typography>

//       <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="menu-appbar"
//           aria-haspopup="true"
//           onClick={handleOpenNavMenu}
//           color="inherit"
//         >
//           <MenuIcon />
//         </IconButton>
//         <Menu
//           id="menu-appbar"
//           anchorEl={anchorElNav}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "left",
//           }}
//           keepMounted
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "left",
//           }}
//           open={Boolean(anchorElNav)}
//           onClose={handleCloseNavMenu}
//           sx={{
//             display: { xs: "block", md: "none" },
//           }}
//         >
//           {pages.map((page) => (
//             <MenuItem key={page} onClick={handleCloseNavMenu}>
//               <Typography textAlign="center">{page}</Typography>
//             </MenuItem>
//           ))}
//         </Menu>
//       </Box>
//       <Typography
//         variant="h6"
//         noWrap
//         component="div"
//         sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
//       >
//         BOOKWORM
//       </Typography>
//       <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//         {pages.map((page) => (
//           <Button
//             key={page}
//             onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
//               handleCloseNavMenu(e)
//             }
//             sx={{ my: 2, color: "white", display: "block" }}
//           >
//             {page}
//           </Button>
//         ))}
//       </Box>

//       <Box>
//         {isLoggedIn ? (
//           <Button
//             id="logout-btn"
//             key="logout-btn"
//             onClick={handleLogout}
//             sx={{ my: 2, color: "white", display: "block" }}
//           >
//             LOG OUT
//           </Button>
//         ) : (
//           <Button
//             id="login-btn"
//             key="login-btn"
//             onClick={handleLogin}
//             sx={{ my: 2, color: "white", display: "block" }}
//           >
//             LOG IN
//           </Button>
//         )}
//       </Box>
//     </Toolbar>
//   </Container>
// </AppBar>
//   );
// };
// export default ResponsiveAppBar;
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

export default function NavigationBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align="center"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily="heading"
            color={useColorModeValue("gray.800", "white")}
          >
            Bookworm
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <Button as="a" fontSize="sm" fontWeight={400} variant="link" href="#">
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
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
