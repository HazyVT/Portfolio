import { Box, Icon, Text, Image, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaItchIo } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function LadyLuck({onDesktop}) {

    const nav = useNavigate();
    
    return (
        <Box marginTop={24}>
            <section>
                <header>
                    <Box>
                        <Text fontSize={14}>October 8, 2024</Text>
                        <Text fontSize={24} fontWeight={600} marginTop={2}>Lady Luck - Endless Studios Game Jam 2024</Text>
                        <Box marginTop={2}>
                            <Icon as={FaItchIo} onClick={() => window.location = "https://sleepyowlstudios.itch.io/lady-luck"} cursor="pointer" _hover={{color: 'primary.main'}} transition={'0.3s ease'} />
                        </Box>
                    </Box>
                </header>
                <article style={{marginTop: '24px'}}>
                    <Image src="/screenshot/ladyluck.png" />
                    <Text fontSize={24} fontWeight={600} marginTop={4}>Description</Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={2}>
                        Lady luck is a turn based rougelike battle simulator where you roll a random dice of spells to attack enemies and keep moving
                        towards getting Maria back home.
                    </Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        I was in charge of programming almost every aspect of the game. The game was created using the Godot game engine and the 
                        C-Sharp language.
                    </Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        Lady Luck was made for the <span style={{color: "#a7ccd1", textDecoration: 'underline'}}>Endless Studios Game Jam 2024</span>.
                    </Text>
                    <Text fontSize={24} fontWeight={600} marginTop={8}>The Gameplay</Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        The gameplay revolves around a dice of spells at the bottom of the screen. A cursor rotates randomly between all the spells
                        and the player must select what spell they want in time with the rotation. Other than that, the player can also select 
                        which enemy they want to attack too.
                    </Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        As the player continues to beat enemies and move from floor to floor, the enemies get harder and harder and will require the 
                        player to utelize healing spells along with damage spells to effectively make it far into the game.
                    </Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        If you would like to play Lady luck then please feel free to play it from the <span style={{color: "#a7ccd1", textDecoration: 'underline', cursor: 'pointer'}} onClick={() => window.location = "https://sleepyowlstudios.itch.io/lady-luck"}>itch.io page</span>.
                    </Text>
                </article>
            </section>
        </Box>
    )
}


LadyLuck.propTypes = {
    onDesktop: PropTypes.bool
}