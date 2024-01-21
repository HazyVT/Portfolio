import { Box, Heading, Icon, ScaleFade, Text } from "@chakra-ui/react";
import { WiStars } from "react-icons/wi";
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';


export default function Portfolio({onDesktop}) {

  function Shinedle() {
    return (
      <Box w={onDesktop ? '30vw' : '70vw'}>
        <Box display='flex' w='fit-content' alignItems='center' cursor={"pointer"} _hover={{color: 'green.300'}} onClick={() => {window.location = "https://shinedle.mosalim.site"}}>
          <Icon as={WiStars} w={12} h={12} />
          <Heading size='lg'>Shinedle</Heading>
        </Box>
        <Text marginTop={2}>
          Shinedle is a daily shiny hunting minigame website for Pokemon. Shinedle is made using react and local storage
          to lock out users for the day. 
        </Text>
        <br />
        <Text>
          I also strived to get a perfect lighthouse score and was able to get it done.
        </Text>
        <Icon as={FaGithub} w={6} h={6} marginTop={4} _hover={{color: 'green.300'}} cursor={"pointer"} onClick={() => {window.location = "https://github.com/HazyVT/Shinedle"}}/>
      </Box>
    )
  }

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box display='flex' flexDir='column' alignItems='center' marginTop={4}>
        <Heading size={onDesktop ? '3xl' : 'xl'}>Portfolio</Heading>
        <Box marginTop={4}>
          <Shinedle />
        </Box>
      </Box>
    </ScaleFade>
  )
}

Portfolio.propTypes = {
  onDesktop: PropTypes.bool
}