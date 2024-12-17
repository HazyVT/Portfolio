import { Box, Icon, Text, Image, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaItchIo } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function OneDay({onDesktop}) {
    return (
        <Box marginTop={24}>
            <section>
                <header>
                    <Box>
                        <Text fontSize={14}>July 29, 2024</Text>
                        <Text fontSize={24} fontWeight={600} marginTop={2}>One Day</Text>
                        <Box marginTop={2}>
                            <Icon as={FaItchIo} onClick={() => window.location = "https://sleepyowlstudios.itch.io/one-day"} cursor="pointer" _hover={{color: 'primary.main'}} transition={'0.3s ease'} />
                        </Box>
                    </Box>
                </header>
                <article style={{marginTop: '24px'}}>
                    <Image src="/onedaybanner.png" />
                    <Text fontSize={24} fontWeight={600} marginTop={4}>Description</Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={2}>
                        One Day is a rougelike twin stick survival game made for PC and Mac using the Godot game engine. The core gameplay mechanics
                        were made in a single day as a small side project as the whole team was working full time on a mobile game for SIP 2024 
                        and we felt like we needed something new to break the monotony of work.
                    </Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        I was in charge of programming almost every aspect of the game. The game was created using the Godot game engine and the 
                        C-Sharp language.
                    </Text>
                    <Text fontSize={24} fontWeight={600} marginTop={8}>The Gameplay</Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        The core gameplay loop consists of the player moving around a small sized map and killing enemies for XP to level up and
                        become stronger. As we were limited on time, we decided to only have a small number of upgrades that were given to the 
                        player randomly when leveling up. No decision can be made on the players part. We also added a chance that the player 
                        becomes "forsaken" and as such, does not recieve a power up of any kind on that level. This led to a lot of players
                        getting frustrated however the game was never hard enough that being forsaken numerous times would even be a detriment 
                        if the player was good enough.
                    </Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        The game was designed to be played with a mouse and keyboard and is the preffered way to play by the entire dev team.
                        However, after the 24 hour deadline of the project, we did decide to implement controller support into the game just 
                        in case anyone wanted to also use a controller to play.
                    </Text>
                    <Text fontSize={onDesktop ? 16 : 14} marginTop={4}>
                        If you would like to play One Day, feel free to download the game on the <Text as='span' color='primary.main' textDecor={'underline'} cursor={'pointer'} onClick={() => window.location = "https://sleepyowlstudios.itch.io/one-day"}>Itch io page</Text>.
                    </Text>

                </article>
            </section>
        </Box>
 
    )
}

OneDay.propTypes = {
    onDesktop: PropTypes.bool
}