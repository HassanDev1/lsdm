import {
  VStack,
  Heading,
  Input,
  HStack,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
const Analysis = ({ data }) => {
  const [tweets, setTweets] = useState("");
  const [searchedName, setSearchedName] = useState([]);
  useEffect(() => {
    setSearchedName(data);
  }, [data]);
  const handleChange = (event) => {
    setTweets(event.target.value);
  };
  const handleClick = async () => {
    let newData = data.filter((item) =>
      item.user_name.toLowerCase().includes(tweets.toLowerCase())
    );
    setSearchedName(newData.length < 1 ? [] : newData);
    setTweets("");
  };

  return (
    <VStack
      w='80%'
      pt='2em'
      h='100vh'
      ml={"30em"}
      spacing='2em'
      //   bgImage='url(./src/assets/gridbg.jpg)'
    >
      <Heading bgColor='gray.50' size='xl'>
        Sentiment Analysis
      </Heading>
      <HStack bgColor='gray.50'>
        <Input
          placeholder='search'
          _placeholder={{ color: "inherit" }}
          type='text'
          name='dataset'
          value={tweets}
          focusBorderColor='lime'
          border='2px'
          onChange={handleChange}
        />
        <Button colorScheme='teal' mb='4' onClick={handleClick}>
          Search
        </Button>
      </HStack>

      <Box overflow={"scroll"} mt='4em'>
        <Table
          variant='striped'
          colorScheme='gray'
          size='lg'
          overflow={"scroll"}
        >
          <Thead>
            <Tr>
              <Th fontSize='2xl' pos='fixed' top='6em'>
                User Name
              </Th>
              <Th fontSize='2xl' pos='fixed' top='6em' left='40em'>
                Tweets
              </Th>
              <Th fontSize='2xl' pos='fixed' top='6em' right='1em'>
                Sentiment
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {searchedName && searchedName.length > 0 ? (
              searchedName.map((item, id) => (
                <Tr key={item.id}>
                  <Td>{item.user_name}</Td>
                  <Td>{item.content}</Td>
                  <Td>{item.sentiment}</Td>
                </Tr>
              ))
            ) : (
              <tr>
                <td>
                  <Button
                    size='lg'
                    isLoading
                    loadingText='Loading'
                    colorScheme='teal'
                    variant='outline'
                    spinnerPlacement='start'
                  >
                    Submit
                  </Button>
                </td>
              </tr>
            )}
          </Tbody>
        </Table>
      </Box>
    </VStack>
  );
};

export default Analysis;
