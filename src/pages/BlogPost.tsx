import { AbsoluteCenter, Box } from "@chakra-ui/react";
import { useWindowWidth } from "@react-hook/window-size";
import Markdown from "react-markdown";
import { useLocation } from "react-router-dom";

export default function BlogPost() {
    
    const location = useLocation();
    const onlyWidth = useWindowWidth();
    
    return (
        <AbsoluteCenter maxH="80vh">
            <Box w={onlyWidth > 700 ? '40vw' : '70vw'} >
                <Box className="markdown-body" paddingBottom={8}>
                    <Markdown>
                        {location.state.post.content}
                    </Markdown>
                </Box>
            </Box>
        </AbsoluteCenter>
    )
}