import { VStack, Image } from "@chakra-ui/react";
const WordCloud = () => {
  return (
    <VStack w='80%' pt='2em' h='100vh' ml={"30em"} spacing='2em' mt='20em'>
      <Image src='./src/assets/wordcloud.ico' boxSize={"20em"} />
    </VStack>
  );
};

export default WordCloud;
