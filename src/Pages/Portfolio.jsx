import { Box, Heading, Icon, ScaleFade, Text } from "@chakra-ui/react";
import { WiStars } from "react-icons/wi";
import { RiWindowFill } from "react-icons/ri";
import { IoColorPaletteSharp } from "react-icons/io5";


import PropTypes from 'prop-types';

export default function Portfolio({onDesktop}) {

  function Shinedle() {
    return (
      <Box w={onDesktop ? '30vw' : '70vw'} marginTop={6}>
        <Box display='flex' w='fit-content' alignItems='center' cursor={"pointer"} _hover={{color: 'green.300'}} onClick={() => {window.location = "https://shinedle.mosalim.site"}}>
          <Icon as={WiStars} w={12} h={12} />
          <Heading size='lg'>Shinedle</Heading>
        </Box>
        <Text marginTop={2}>
          Shinedle is a daily shiny hunting minigame website for Pokemon. Shinedle is made using react and local storage
          to lock out users for the day. Along with that, I also strived to get a perfect lighthouse score and was able to get it done.
        </Text>
      </Box>
    )
  }

  function BunGLFW() {
    return (
      <Box w={onDesktop ? '30vw' : '70vw'} marginTop={20}>
        <Box display='flex' w='fit-content' alignItems='center' cursor={"pointer"} _hover={{color: 'orange.300'}} onClick={() => {window.location = "https://github.com/HazyVT/BunGLFW"}}>
          <Icon as={RiWindowFill} w={7} h={7} marginTop={1} marginRight={2}/>
          <Heading size='lg'>BunGLFW</Heading>
        </Box>
        <Text marginTop={2}>
          Typescript bindings of GLFW made for bun. Completely allows one to code all GLFW methods and use all GLFW variables with nothing
          but Typescript.
        </Text>
      </Box>
    )
  }

  function Palette() {
    return (
      <Box w={onDesktop ? '30vw' : '70vw'} marginTop={20}>
        <Box display='flex' w='fit-content' alignItems='center' cursor={"pointer"} _hover={{color: 'teal.300'}} onClick={() => {window.location = "https://github.com/HazyVT/Palette"}}>
          <Icon as={IoColorPaletteSharp} w={7} h={7} marginTop={1} marginRight={2}/>
          <Heading size='lg'>Palette</Heading>
        </Box>
        <Text marginTop={2}>
          Palette is a web app designed to allow you to quickly generate color palettes on real component designs to find a nice color palette for
          your next web application project.
        </Text>
      </Box>
    )
  }

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box display='flex' flexDir='column' alignItems='center' marginTop={4}>
        <Heading size={onDesktop ? '3xl' : 'xl'}>Portfolio</Heading>
        <Box marginTop={4}>
          <Shinedle />
          <BunGLFW />
          <Palette />
        </Box>
      </Box>
    </ScaleFade>
  )
}

Portfolio.propTypes = {
  onDesktop: PropTypes.bool
}