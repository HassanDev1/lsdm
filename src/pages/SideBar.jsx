import { VStack, Text, Button, Image, Spacer, Icon } from "@chakra-ui/react";
import { MdDataset, MdOutlineDisplaySettings } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
const LeftSideBar = () => {
  const [clicked, setClicked] = useState(false);
  const navigationList = ["dataset", "analysis", "visual", "words"];

  return (
    <VStack
      width='20%'
      height='100vh'
      bg='#464646'
      position='fixed'
      borderRadius='1%'
      m='2'
      color='whiteAlpha.800'
      pt='4em'
    >
      <Link to='/' preventScrollReset='true'>
        <Button
          colorScheme='teal'
          width='100%'
          fontSize={{ lg: "1.6em", sm: "1em" }}
          p='8'
        >
          <Icon mr='2'>
            <MdDataset />
          </Icon>

          <Text>DataSets</Text>
        </Button>
      </Link>
      <Link to='/analysis' preventScrollReset={true}>
        <Button
          colorScheme='teal'
          width='100%'
          fontSize={{ lg: "1.6em", sm: "1em" }}
          p='8'
        >
          <Icon mr='2'>
            <IoAnalytics />
          </Icon>
          <Text ml='4'>Analysis</Text>
        </Button>
      </Link>
      <Link to='/visual' preventScrollReset={true}>
        <Button
          colorScheme='teal'
          width='80%'
          size='lg'
          p='8'
          fontSize={{ lg: "1.6em", sm: "1em" }}
        >
          <Icon mr='6'>
            <MdOutlineDisplaySettings />
          </Icon>

          <Text>Visualization</Text>
        </Button>
      </Link>
      <Link to='/words' preventScrollReset={true}>
        <Button
          colorScheme='teal'
          width='100%'
          fontSize={{ md: "1em", lg: "1.4em" }}
          p='6'
        >
          <Image src='./src/assets/wordcloud.ico' boxSize='25px' />

          <Text ml='6'>Word Cloud</Text>
        </Button>
      </Link>
      <Spacer />
      <Image src='./src/assets/graph.gif' boxSize='250px' />
    </VStack>
  );
};

export default LeftSideBar;
