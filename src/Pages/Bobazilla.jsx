import { Box, Icon, Text, Image, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaItchIo } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function Bobazilla({onDesktop}) {

    const nav = useNavigate();
    
    return (
        <Box marginTop={24}>
            <section>
                <header>
                    <Box>
                        <Text fontSize={14}>August 20, 2024</Text>
                        <Text fontSize={24} fontWeight={600} marginTop={2}>Bobazilla - GMTK 2024 Game Jam</Text>
                        <Box marginTop={2}>
                            <Icon as={FaItchIo} onClick={() => window.location = "https://sleepyowlstudios.itch.io/bobazilla"} cursor="pointer" _hover={{color: 'primary.main'}} transition={'0.3s ease'} />
                        </Box>
                    </Box>
                </header>
                <article style={{marginTop: '24px'}}>
                    <Image src="/screenshot/boba.png" />
                    <Text fontSize={24} fontWeight={600} marginTop={4}>Description</Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={2}>
                        Bobazilla is a simulator boba making game where you are a barista serving boba to kaiju of all different shapes and sizes.
                        The size of the boba cup you have to serve depends on the size of the kaiju along with the size of their order. It is 
                        on you to infer what large means to a small kaiju and what small means to a large kaiju.
                    </Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        I was in charge of programming almost every aspect of the game. The game was created using the Godot game engine and the 
                        C-Sharp language.
                    </Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        Bobazilla was made for the <span style={{color: "#a7ccd1", textDecoration: 'underline', cursor: 'pointer'}} onClick={() => window.location = "https://itch.io/jam/gmtk-2024"}>GMTK 2024</span> game jam with the theme of "Built to scale".
                    </Text>
                    <Text fontSize={24} fontWeight={600} marginTop={8}>The Ideation Phase</Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        When the theme of the game jam first got announced, me and my team of three had to come up with what kind of game
                        we exactly wanted to make. We ran through a ton of different ideas all of which felt a little flat or boring.
                    </Text>
                    <UnorderedList marginTop={4} marginLeft={6} fontSize={onDesktop ? 16 : 14}> 
                        <ListItem>
                            A 2D platformer where you can change the size of the platforms. This idea was scrapped due to being
                            far too simple and not having enough for us to innovate on.
                        </ListItem>
                        <ListItem marginTop={2}>
                            A rougelike top down shooter where you change your size to dodge obstacles and enemies. This idea
                            did not make it due to us just having created a game earlier called <Text as={'span'} style={{color: "#a7ccd1", textDecoration: 'underline', cursor: 'pointer'}} onClick={() => nav('/work/oneday')}>One Day</Text> that was a rougelike top down shooter and we did not want to make the same game twice.
                        </ListItem>
                    </UnorderedList>
                    <Text fontSize={24} fontWeight={600} marginTop={8}>The Development Phase</Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        After that we finally decided on the idea of making a boba cafe simulator with the size of the drinks being the main gameplay
                        gimick. I was in charge of most of the programming on the team and our four day deadline had begun. The game was made using
                        the Godot game engine and was the second time I had ever used the engine for a finished product. I also decided to use the 
                        C-Sharp coding language as I had experience with it whilst I did not have any experience with GDScript. 
                    </Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        The development cycle of the game lasted four days from August 17th to August 20th and a total of 42 commits where made on the github repository.
                        I was 36 out of the 42 commits made on the repository and was in charge of coding almost every aspect of gameplay.
                    </Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        If you would like to play Bobazilla then please feel free to download it from the <span style={{color: "#a7ccd1", textDecoration: 'underline', cursor: 'pointer'}} onClick={() => window.location = "https://sleepyowlstudios.itch.io/bobazilla"}>itch.io page</span>.
                    </Text>

                </article>
            </section>
        </Box>
    )
}


Bobazilla.propTypes = {
    onDesktop: PropTypes.bool
}