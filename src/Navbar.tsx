import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { Props } from "./App";
import { useNavigate } from "react-router-dom";

type LinkItemProps = {
    text: string,
    link: string
}

export default function Navbar({theme, setTheme} : Props) {

    const nav = useNavigate();
    
    const themeChangeHandler = () => {
        const ntheme = !theme;
        setTheme(ntheme);

        if (ntheme) {
            localStorage.setItem('theme', 'light');
            document.body.className = "light"
        } else {
            localStorage.setItem('theme', 'dark');
            document.body.className = "dark"
        }
    }

    function LinkItem({text, link} : LinkItemProps) {
        return (
            <Text cursor="pointer" _hover={{color: theme ? 'link.light' : 'link.dark'}} fontFamily={'mono'} onClick={() => nav(link)} marginLeft={2} marginRight={2}>{text}</Text>
        )
    }
    
    return (
        <Box pos='fixed' left='0' top='0' w="100vw" display='flex' justifyContent={'space-between'} alignItems={'center'} paddingRight={4}>
            <Button onClick={themeChangeHandler} colorScheme="">  
                <Icon color={theme ? '#4c4f69' : '#c6d0f5'} as={theme ? BsMoonFill : BsSunFill} />
            </Button>
            <Box display="flex" alignItems={'center'}>
                <LinkItem text={"home"} link="/" />
                <Text>|</Text>
                <LinkItem text="blog" link="/blog" />
            </Box>
        </Box>
    )
}

