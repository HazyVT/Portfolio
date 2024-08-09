import { Box, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';



export default function Navigation() {

  const nav = useNavigate();
  
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' padding={4}>
      <Heading cursor={"pointer"} _hover={{color: 'red.300'}} onClick={() => {nav('/')}}>HVT</Heading>
      <Box display={'flex'} w={'12vw'} justifyContent={'space-around'}>
        <Text cursor={"pointer"} _hover={{color: 'red.300'}} onClick={() => {window.location = "/Resume.pdf"}}>Resume</Text>
      </Box>
    </Box>
  )
}

Navigation.propTypes = {
  onDesktop: PropTypes.bool
}