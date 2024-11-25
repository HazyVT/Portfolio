import { Box, Center, ScaleFade, Text, Image, Button } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import { useRef } from "react";



export default function Home({onDesktop}) {

  const portRef = useRef();
  
  return (
    <Box marginTop={2}>
    <ScaleFade in={true}>
      <Center>
        <Image src="/kitty.jpg" />
      </Center>
      <Center>
        <Box textAlign={'center'} marginTop={onDesktop ? -14 : -6}>
          <Text fontSize={onDesktop ? 48 : 24} fontWeight={600}>Hi. Im Mohammed.</Text>
          <Text>Programmer | Developer</Text>
        </Box>
      </Center>
      <Text marginTop={12} fontWeight={600} fontSize={20}>About Me</Text>
      <Center>
        <Text marginTop={2} textAlign={'left'} fontSize={onDesktop ? 16 : 14}>
          I am a programmer, game developer and beginner artist.
          I have various escapades into all different kinds of programming and art
          all of which will be shown on this portfolio page. I am an avid gamer and gundam enjoyer.
          I love singleplayer games such as Pokemon, Monster Hunter and Factorio.
        </Text>
      </Center>
      <Text marginTop={12} fontWeight={600} fontSize={20}>My Works</Text>
    </ScaleFade>
    </Box>

  )
}

Home.propTypes = {
  onDesktop: PropTypes.bool
}