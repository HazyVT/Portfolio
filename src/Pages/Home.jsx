import { Box, Button, Heading, Icon, ScaleFade, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Home({onDesktop}) {

  const nav = useNavigate();
  
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box display='flex' flexDir='column' alignItems='center' textAlign='center' marginTop={4}>
        <Heading size={onDesktop ? '3xl' : 'xl'}>Mohammed <Heading size={onDesktop ? '3xl' : 'xl'} as='span' color='red.300'>Salim</Heading></Heading>
        <Text fontSize={onDesktop ? 24 : 14} marginTop={2}>Software Engineer</Text>
        <Box marginTop={4} w={onDesktop ? '30%' : '60%'}>
          <Text textAlign='left' marginTop={2}>
            My name is Mohammed Salim. I am a 23 year old programmer with an interest in game development and web development.
            I have experience with both personal projects and professional projects. Both of which can be found in my <Text as='span' color='red.300' cursor={"pointer"} _hover={{color: 'red.400'}} onClick={() => {nav('/portfolio')}}>portfolio</Text>.
          </Text>
          <Text marginTop={2} textAlign='left'>
            I am an avid gamer and enjoy very casual games such as Animal Crossing, Minecraft and Pokemon. I always enjoyed
            single player games a lot more than multiplayer games. I also really love cats.
          </Text>  
          <Box textAlign='center' marginTop={8}>
            <Text>Last seen working on: <Text as='span' color='red.300' cursor={"pointer"} _hover={{color: 'red.500'}} onClick={() => {window.location = "https://github.com/HazyVT/Slipher"}}>Slipher</Text></Text>
          </Box>
          <Button onClick={() => {nav('/portfolio')}} marginTop={8} bgColor={'red.300'} color='white' _hover={{bgColor: 'red.400'}}>My Portfolio<Icon marginLeft={2} as={HiArrowRight}/></Button>
        </Box>
        <Text marginTop={8} w={onDesktop ? '30%' : '60%'} textAlign='left'>
          If you would like to get in contact with me then here are all the places that I am available.
        </Text>
        <Box display='flex' w={onDesktop ? '28%' : '60%'} justifyContent='space-between' marginTop={8} color='red.300'>
          <Icon as={FaGithub} w={6} h={6} cursor={"pointer"} onClick={() => {window.location = "https://github.com/HazyVT"}}/>
          <Icon as={FaTwitter} w={6} h={6} cursor={"pointer"} onClick={() => {window.location = "https://twitter.com/hazyvt"}}/>
          <Icon as={FaLinkedin} w={6} h={6} cursor={"pointer"} onClick={() => {window.location = "https://www.linkedin.com/in/mohammed-almakhmari-0a3534227/"}}/>
        </Box>
      </Box>
    </ScaleFade>

  )
}

Home.propTypes = {
  onDesktop: PropTypes.bool
}