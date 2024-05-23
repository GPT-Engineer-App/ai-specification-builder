import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center">
        <Heading size="md" color="white">
          Todo App
        </Heading>
        <Spacer />
        <Button as={Link} to="/" colorScheme="teal" variant="outline" mr={4}>
          Home
        </Button>
        <Button as={Link} to="/about" colorScheme="teal" variant="outline">
          About
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;