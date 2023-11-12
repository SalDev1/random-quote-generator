import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuotesByAuthorName } from "../services/QuotesServices";
import { Box, Image, Spinner, Text, VStack } from "@chakra-ui/react";

const Search = () => {
  const { name } = useParams();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [length, setLength] = useState(0);

  console.log(length);

  useEffect(() => {
    getQuotesByAuthorName(name)
      .then((res) => {
        // console.log(res.data);
        setQuotes(res.data.results);
        setLength(res.data.count);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <VStack
        display='flex'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        py='10'>
        <Text>
          {loading ? (
            <Spinner color='orange' size='xl' />
          ) : (
            <>
              {length === 0 ? (
                <Box
                  display='flex'
                  flexDir='column'
                  justifyContent='center'
                  alignItems='center'>
                  <Image src='/404-error.png' boxSize='150px' />
                  <Text fontSize='2xl' fontWeight='500'>
                    No Quotes Found !
                  </Text>
                </Box>
              ) : (
                <>
                  <Box pl='5'>
                    {quotes.map((quote) => (
                      <Box pb={5} mx={2} key={quote._id}>
                        <Text fontSize={{ base: "xs", md: "lg" }}>
                          {quote.content}
                        </Text>
                        <Text
                          fontStyle='italic'
                          textAlign='right'
                          fontSize={{ base: "xs", md: "lg" }}
                          color='orange'>
                          {" "}
                          - {quote.author}
                        </Text>
                      </Box>
                    ))}
                  </Box>
                </>
              )}
            </>
          )}
        </Text>
      </VStack>
    </>
  );
};

export default Search;
