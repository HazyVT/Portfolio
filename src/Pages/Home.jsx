import { Box, Center, ScaleFade, Text, Image } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";



export default function Home({onDesktop}) {
  
  const nav = useNavigate();

  return (
    <Box marginTop={2} >
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
      <Text marginTop={12} fontWeight={600} fontSize={20} color='accent.main' textDecor={'underline'}>About Me</Text>
      <Center>
        <Text marginTop={2} textAlign={'left'} fontSize={onDesktop ? 16 : 14}>
          I am a programmer, game developer and beginner artist.
          I have various escapades into all different kinds of programming and art
          all of which will be shown on this portfolio page. I am an avid gamer and gundam enjoyer.
          I love singleplayer games such as Pokemon, Monster Hunter and Factorio.
        </Text>
      </Center>
      <Text marginTop={12} fontWeight={600} fontSize={20} color='accent.main' textDecor={'underline'}>My Programming Works</Text>
      <Box w="40vw" display={onDesktop ? 'block' : 'none'}>
      <Center marginTop={4}>
        <Image borderRadius={'8px'} cursor={"pointer"} src="/Slifer.png" w={onDesktop ? '100%' : '100%'} onClick={() => nav('/work/slifer')}/>
        <Image borderRadius={'8px'} cursor={"pointer"} src="/bobazilla.png" w={onDesktop ? '100%' : '50%'} marginLeft={4} onClick={() => nav('/work/bobazilla')}/>
        <Image borderRadius={'8px'} cursor={"pointer"} src="/oneday.png" w={onDesktop ? '100%' : '50%'} marginLeft={4} onClick={() => nav('/work/oneday')} />
      </Center>
      <Center marginTop={2}>
        <Image borderRadius={'8px'} cursor={"pointer"} src="/ladyluck.png" w={onDesktop ? '100%' : '50%'} onClick={() => nav('/work/ladyluck')} />
        <Image opacity={0} borderRadius={'8px'} src="/ladyluck.png" w={onDesktop ? '100%' : '50%'} marginLeft={4}/>
        <Image opacity={0} borderRadius={'8px'} src="/ladyluck.png" w={onDesktop ? '100%' : '50%'} marginLeft={4}/>
      </Center>
      </Box>
      <Box w="80vw" display={onDesktop ? 'none' : 'block'}>
      <Center marginTop={4}>
        <Image borderRadius={'8px'} cursor={"pointer"} src="/slifer.png" w={onDesktop ? '100%' : '50%'} onClick={() => nav('/work/slifer')}/>
        <Image borderRadius={'8px'} cursor={"pointer"} src="/bobazilla.png" w={onDesktop ? '100%' : '50%'} marginLeft={4} onClick={() => nav('/work/bobazilla')}/>
      </Center>
      <Center marginTop={2}>
        <Image borderRadius={'8px'} cursor={"pointer"} src="/oneday.png" w={onDesktop ? '100%' : '50%'} marginLeft={4} onClick={() => nav('/work/oneday')}/>
        <Image borderRadius={'8px'} cursor={"pointer"} src="/ladyluck.png" w={onDesktop ? '100%' : '50%'} onClick={() => nav('/work/ladyluck')}/>
      </Center>
      </Box>
    </ScaleFade>
    </Box>

  )
}

Home.propTypes = {
  onDesktop: PropTypes.bool
}