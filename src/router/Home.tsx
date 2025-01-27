import { Box, Heading, Image, Text, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { FaItchIo } from "react-icons/fa";
import GameLog from "../components/GameLog";

import GithubCommits from "../components/GithubCommits";
function Home() {
    function IconLink(props: { icon: IconType; route: string }) {
        return (
            <Icon
                as={props.icon}
                onClick={() => (window.location.href = props.route)}
                w={6}
                h={6}
                cursor="pointer"
                _hover={{ color: "#fbf1c7" }}
            ></Icon>
        );
    }

    function Profiler(props: { color: string; text: string }) {
        return (
            <Text as="span" color={props.color}>
                {props.text}{" "}
            </Text>
        );
    }

    return (
        <Box
            minW="80vw"
            minH="100vh"
            display="flex"
            flexDir="column"
            alignItems="center"
            flexWrap="wrap"
            paddingTop={16}
            cursor="default"
            w="60vw"
        >
            <Heading size="2xl" fontFamily="mono">
                Welcome
            </Heading>
            <Image src="/images.png" w="10rem" />
            <Heading>I am Hazorah.</Heading>
            <Text>
                <Profiler color="#B8BB26" text="Programmer" />
                {" | "}
                <Profiler color="#83A598" text="Developer" />
                {" | "}
                <Profiler color="#D3869B" text="Gamer" />
            </Text>
            <Heading marginTop={12}>About Me</Heading>
            <Text maxW="30rem" wordBreak={"break-word"} marginTop={2}>
                Hello and welcome to my website. I am a programmer who lives to
                make web apps and games. I live and breath gruvbox and will die
                on the hill that gruvbox is the best theme ever created.
            </Text>
            <Text maxW="30rem" wordBreak={"break-word"} marginTop={4}>
                I am a software development major working on my own projects on
                the side when I do not have a job, commission or game jam to
                work on. All of my personal projects can be found on my github
                page if you would like to see that.
            </Text>
            <Text maxW="30rem" wordBreak={"break-word"} marginTop={4}>
                I have worked on a lot of games with my friends, all of which
                can be found on our teams{" "}
                <Text
                    color="#FE8019"
                    as="a"
                    href="https://sleepyowlstudios.itch.io"
                >
                    itch page
                </Text>
                .
            </Text>
            <Heading marginTop={8}>Gaming Journal</Heading>
            <GameLog />
            <Box
                display="flex"
                w="10vh"
                justifyContent="space-between"
                marginTop={8}
                paddingBottom={12}
            >
                <IconLink icon={BsGithub} route="https://github.com/hazyvt" />
                <IconLink
                    icon={FaItchIo}
                    route="https://hazyautumnrain.itch.io"
                />
            </Box>
        </Box>
    );
}

export default Home;
