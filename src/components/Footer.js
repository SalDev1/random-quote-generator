import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      overflow='hidden'>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}>
        <Text as='a' href='/' cursor='pointer' fontSize='xl' fontWeight='bold'>
          Random
          <Text as='span' color='orange.400'>
            Quote
          </Text>
        </Text>
        <Stack direction={"row"} spacing={6}>
          <Box as='a' href={"#"}>
            Home
          </Box>
          <Box as='a' href={"#"}>
            Login
          </Box>
          <Box as='a' href={"#"}>
            Contact
          </Box>
          <Box as='a' href={"#"}>
            Signup
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "center" }}
          align={{ base: "center", md: "center" }}>
          <Text>© 2023 Random Quotes. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
