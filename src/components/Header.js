import {
  Box,
  Button,
  Hide,
  Input,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [authorName, setAuthorName] = useState("");
  const navigate = useNavigate();

  console.log(authorName);

  const getListQuotesHandler = () => {
    const url = `/search/${authorName}`;
    navigate(url);
  };

  return (
    <Box
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
      w='100%'
      h='10vh'
      borderColor='red'>
      <Text
        as='a'
        href='/'
        fontSize='xl'
        ml='10'
        fontWeight='bold'
        display={{ base: "none", md: "block" }}
        cursor='pointer'>
        Random
        <Text as='span' color='orange.400'>
          Quote
        </Text>
      </Text>

      <Input
        size='md'
        w={{ base: "75%", md: "50%" }}
        placeholder='Search Quote...'
        onChange={(e) => setAuthorName(e.target.value)}
        onSubmit={getListQuotesHandler}
      />
      <Button
        color='black'
        bgColor='orange'
        _hover='none'
        cursor='pointer'
        onClick={() => getListQuotesHandler()}>
        Search
      </Button>
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent='space-around'
        alignItems='center'
        width='12%'>
        <Text cursor='pointer' fontWeight='400' _hover={{ color: "orange" }}>
          Login
        </Text>
        <Text cursor='pointer' _hover={{ color: "orange" }} fontWeight='400'>
          Signup
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
