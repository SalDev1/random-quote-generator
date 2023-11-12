import React, { useEffect, useState } from "react";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Spinner,
} from "@chakra-ui/react";
import { getRandomQuote } from "../services/QuotesServices";

const Home = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);

  console.log(quote);

  useEffect(() => {
    getRandomQuote()
      .then((res) => {
        setQuote(res.data[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}>
            Get a
            <Text as={"span"} color='darkorange'>
              <span> </span> Random Quote
            </Text>{" "}
            <br /> Every Single Day
          </Heading>
          <Box
            display='flex'
            flexDir='column'
            justifyContent='center'
            alignItems='center'
            width='100%'>
            {loading ? (
              <Spinner color='orange' />
            ) : (
              <>
                {" "}
                <Text fontSize={{ base: "md", md: "xl" }}>
                  {quote?.content}
                </Text>
                <Text fontStyle='italic' textAlign='center' mt='2'>
                  {" "}
                  - {quote?.author}
                </Text>
              </>
            )}
          </Box>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}></Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
