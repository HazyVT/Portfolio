import { Box, Icon, Text, Image, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaGithub, FaGlobe, FaItchIo } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
export default function Slifer({onDesktop}) {
    const nav = useNavigate();
    
    return (
        <Box marginTop={24}>
            <section>
                <header>
                    <Box>
                        <Text fontSize={14}>September 17, 2024</Text>
                        <Text fontSize={24} fontWeight={600} marginTop={2}>Slifer - Typescript Game Framework</Text>
                        <Box marginTop={2}>
                            <Icon as={FaGithub} onClick={() => window.location = "https://github.com/HazyVT/Slifer"} cursor="pointer" _hover={{color: 'primary.main'}} transition={'0.3s ease'} />
                            <Icon as={FaGlobe} onClick={() => window.location = "https://slifer.hazyvt.com"} marginLeft={4} cursor="pointer" _hover={{color: 'primary.main'}} transition={'0.3s ease'} />
                        </Box>
                    </Box>
                </header>
                <article style={{marginTop: '24px'}}>
                    <Image src="/screenshot/logo-alpha.png" />
                    <Text fontSize={24} fontWeight={600} marginTop={4}>Description</Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={2}>
                        Slifer is a game framework made for the typescript programming language. The Slifer framework uses bun and SDL2
                        to allow the creation of native desktop games using the language of the web.
                    </Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        Slifer was created because I wanted to use my already existing knowledge of typescript to make games. However, there
                        did not exist a framework or game engine that uses the typescript language. As such, I took it onto myself to create 
                        that framework
                    </Text>
                    <Text fontSize={24} fontWeight={600} marginTop={8}>Inspiration</Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        The way Slifer is used is inspired by a multitude of game frameworks. The two most influental inspirations are love2D and
                        pygame. I wanted to allow any users of these frameworks to easily use Slifer or any tutorials for these game frameworks
                        to translate to Slifer pretty easy.
                    </Text>
                    <Text fontSize={24} fontWeight={600} marginTop={8}>Development</Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        Slifer is seperated into different modules for different activies. For instance, any graphics function is inside the graphics
                        module and this exists for every function in Slifer. The only functions that are outside of modules are the generic functions
                        such as creating a window or quitting.
                    </Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        The framework works by using bun's FFI (foreign function interface) and the SDL2 library to allow the creation of native
                        game applications using typescript. Bun also allows the user to export their application into windows, macos and linux.
                    </Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        If you'd like to use Slifer then feel free to check out the <span style={{color: "#a7ccd1", textDecoration: 'underline', cursor: 'pointer'}} onClick={() => window.location = "https://slifer.hazyvt.com"}>wiki page</span>.
                    </Text>
                </article>
            </section>
        </Box>
    )
}


Slifer.propTypes = {
    onDesktop: PropTypes.bool
}
