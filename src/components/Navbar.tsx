import { Box, Text } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const nav = useNavigate();

    function NavLink(props: { text: string; route: string }) {
        return (
            <Text
                _hover={{ color: "#fbf1c7" }}
                onClick={() => nav(props.route)}
                cursor="pointer"
            >
                {props.text}
            </Text>
        );
    }

    return (
        <Box
            w="40vw"
            pos="fixed"
            top="0"
            display="flex"
            justifyContent="space-around"
            backgroundColor="#282828"
            padding={2}
        >
            <NavLink text="Home" route="/" />
            <NavLink text="Blog" route="/blog" />
            <NavLink text="Works" route="/works" />
        </Box>
    );
}

export default Navbar;
