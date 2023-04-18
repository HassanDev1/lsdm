import {
  VStack,
  Heading,
  Input,
  HStack,
  Button,
  Box,
  SimpleGrid,
  Text,
  GridItem,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
const CenterPage = ({ data }) => {
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
      ml={"25em"}
      mr='2em'
      spacing='2em'
      //   bgImage='url(./src/assets/gridbg.jpg)'
    >
      <Heading size='xl'>DataSet</Heading>
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
      <SimpleGrid columns={2} spacing={10} overflow='scroll'>
        <Box position='sticky' top='0.1px' bg='white'>
          <Heading mb='1em' mt='1'>
            User Name
          </Heading>
        </Box>
        <Box position='sticky' top='0.1px' bg='white'>
          <Heading mb='1em' mt='1'>
            Tweets
          </Heading>
        </Box>
        {/* <Box position='sticky' top='1px' bg='white'>
          <Heading mb='1em' mt='1'>
            Sentiment
          </Heading>
        </Box> */}

        {searchedName && searchedName.length > 0 ? (
          searchedName.map((item, id) => (
            <>
              <Box bgColor='lightblue' h='8em'>
                <Text>{item.user_name}</Text>
              </Box>
              <Box bgColor='lightblue' h='9em'>
                <Text>{item.content}</Text>
              </Box>
              {/* <Box bgColor='lightblue' h='8em'>
                <Text>{item.sentiment}</Text>
              </Box> */}
            </>
          ))
        ) : (
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
        )}
      </SimpleGrid>
    </VStack>
  );
};

export default CenterPage;
