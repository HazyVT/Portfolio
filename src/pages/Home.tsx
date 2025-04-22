import { AbsoluteCenter, Box, Heading, Divider, Text, Icon } from "@chakra-ui/react";
import { Props } from "../App";
import { useWindowWidth } from '@react-hook/window-size'
import { BsGithub } from "react-icons/bs";
import { FaItchIo } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6'
import { IconType } from "react-icons/lib";

type NavIconType = {
    icon: IconType,
    link: string
}

export default function HomePage({theme} : Props) {

    const onlyWidth = useWindowWidth();
    
    function NavIcon({icon, link} : NavIconType) {
        return (
            <Icon as={icon} cursor="pointer" _hover={{color: theme ? 'link.light' : 'link.dark'}} onClick={() => window.location.href = link} />
        )
    }
    
    return (
        <AbsoluteCenter>
            <Box textAlign={'center'} w={onlyWidth > 700 ? "30vw" : "80vw"}>
                <Heading fontFamily={'mono'} size='sm'>Hello :3</Heading>
                <Text color={theme ? "sub.light" : "sub.dark"}>Welcome to my website.</Text>
                <Box marginTop={4} display='flex' justifyContent={'space-around'} alignItems={'center'} marginLeft={24} marginRight={24}>
                    <NavIcon icon={BsGithub} link="https://github.com/hazyvt"/>
                    <NavIcon icon={FaItchIo} link="https://hazyautumnrain.itch.io"/>
                    <NavIcon icon={FaBluesky} link="https://bsky.app/profile/hazora.bsky.social" />
                </Box>
                <Divider borderColor={theme ? 'text.light' : 'text.dark'} paddingTop={4} marginBottom={4} />
                <Text textAlign={'left'}>
                    My name is Hazy. I am a programmer, game developer and gamer.
                    I enjoy spending my time making my own games or playing games that
                    have been rotting in my backlog.
                </Text>
                <Text marginTop={4} textAlign={'left'}>
                </Text>
                <Text marginTop={4} textAlign={'left'}>
                    I am currently working towards getting my bachelors in software
                    development. Any and all of my projects can be found on my github page
                    while any of my games can be found on my itch page.
                </Text>
                <Text marginTop={4} textAlign={'left'}>
                    I am also a very mediocre artist but I try to practice
                    when I have the time.
                </Text>
            </Box>
            </AbsoluteCenter>
    )
}