import { Box, Heading, Icon, Image, ScaleFade, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useRef } from "react";

export default function Home({onDesktop}) {

  const portRef = useRef();
  
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box display='flex' flexDir='column' alignItems='center' textAlign='center' marginTop={4}>
        <Heading size={onDesktop ? '3xl' : 'xl'}>Mohammed <Heading size={onDesktop ? '3xl' : 'xl'} as='span' color='red.300'>Salim</Heading></Heading>
        <Text fontSize={onDesktop ? 24 : 14} marginTop={2}>Software Engineer</Text>
        <Box marginTop={4} w={onDesktop ? '30%' : '60%'}>
          <Text textAlign='left' marginTop={2}>
            My name is Mohammed Salim. I am a 23 year old programmer with an interest in game development and web development.
            I have experience with both personal projects and professional projects. Both of which can be found in my <Text as='span' color='red.300' cursor={"pointer"} _hover={{color: 'red.400'}} onClick={() => {portRef.current.scrollIntoView()}}>portfolio</Text>.
          </Text>
          <Text marginTop={2} textAlign='left'>
            I am an avid gamer and enjoy very casual games such as Animal Crossing, Minecraft and Pokemon. I always enjoyed
            single player games a lot more than multiplayer games. I also really love cats.
          </Text>  
          <Box textAlign='center' marginTop={8}>
            <Text>Last seen working on: <Text as='span' color='red.300' cursor={"pointer"} _hover={{color: 'red.500'}} onClick={() => {window.location = "https://github.com/HazyVT/Slifer"}}>Slifer</Text></Text>
          </Box>
        </Box>
        <Text marginTop={8} w={onDesktop ? '30%' : '60%'} textAlign='left'>
          If you would like to get in contact with me then here are all the places that I am available.
        </Text>
        <Box display='flex' w={onDesktop ? '28%' : '60%'} justifyContent='space-between' marginTop={8} color='red.300'>
          <Icon as={FaGithub} w={6} h={6} cursor={"pointer"} onClick={() => {window.location = "https://github.com/HazyVT"}}/>
          <Icon as={FaTwitter} w={6} h={6} cursor={"pointer"} onClick={() => {window.location = "https://twitter.com/hazyvt"}}/>
          <Icon as={FaLinkedin} w={6} h={6} cursor={"pointer"} onClick={() => {window.location = "https://www.linkedin.com/in/mohammed-almakhmari-0a3534227/"}}/>
        </Box>
        <Box marginTop={24} ref={portRef} display='flex' flexDir={'column'}>
          <Heading size='xl'>Portfolio</Heading>
          <Box display={onDesktop ? 'flex' : 'block'} w='fit-content' marginRight={8}>
            <Box cursor={'pointer'} marginTop={24} marginLeft={12} w={onDesktop ? 80 : 60} display='flex' flexDir='column' alignItems='center' onClick={() => {window.location = "https://sleepyowlstudios.itch.io/one-day"}}>
              <Image src={"OneDayThumbnail.png"} w={48} />
              <Text marginTop={4} textAlign={'left'}>
                One Day is a rougelike twin stick survival game made by me and my friends at sleepy owl studios made enitrely in Godot.
                It was made in a single day and contains RNG elements along with simple and fun gameplay.
                One Day also has an official release on both windows and mac.
              </Text>
            </Box>
            <Box cursor={'pointer'} marginTop={24} marginLeft={12} w={onDesktop ? 80 : 60} display='flex' flexDir='column' alignItems='center' onClick={() => {window.location = "https://github.com/hazyvt/bunglfw"}}>
              <Image src={"bunwordmark.svg"} w={24}/>
              <Image src={"glfwicon.png"} w={24} />
              <Text marginTop={4} textAlign={'left'}>
                BunGLFW is a typescript library made for the bun runtime that gives you access to GLFW bindings for typescript.
                This allows for native desktop applications to be written in typescript without the need for electron.
              </Text>
            </Box>
          </Box>  
          <Box cursor={'pointer'} marginTop={24} marginLeft={12} w={onDesktop ? 80 : 60} display='flex' flexDir='column' alignItems='center' onClick={() => {window.location = "https://github.com/hazyvt/bunglfw"}}>
            <Image src={"Slifer.png"} w={48}/>
            <Text marginTop={4} textAlign={'left'}>
            Slifer is a game framework made to allow users to code games in typescript. 
            The framework uses bun and SDL2 under the hood to allow your game to render and build natively to desktop.
            </Text>
          </Box>        
        </Box>
      </Box>
    </ScaleFade>

  )
}

Home.propTypes = {
  onDesktop: PropTypes.bool
}