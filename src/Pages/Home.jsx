import { Box, Center, ScaleFade, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import { useRef } from "react";

export default function Home({onDesktop}) {

  const portRef = useRef();
  
  return (
    <Box marginTop={24}>
    <ScaleFade in={true}>
      <Center>
      <Box textAlign={'center'}>
        <Text fontSize={28} fontWeight={600}>Hi. Im Mohammed.</Text>
        <Text>Programmer | Developer</Text>
      </Box>
      <Box>
        
      </Box>
      </Center>
    </ScaleFade>
    </Box>

  )
}

Home.propTypes = {
  onDesktop: PropTypes.bool
}