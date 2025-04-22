import { Box, Text } from "@chakra-ui/react";
import Markdown from 'react-markdown';
import Post from "../components/blog";
import { useWindowWidth } from "@react-hook/window-size";

type blogProps = {
    theme: boolean,
    posts: Post[]
}

export default function BlogPage({posts} : blogProps) {

    const onlyWidth = useWindowWidth();

    return (
        <Box display='flex' flexDir='column' alignItems={'center'} justifyContent={'center'} paddingTop={24}>
        <Box w={onlyWidth > 700 ? "30vw" : "80vw"}>
            {posts.map((post, index) => {
                return (
                    <Box className="markdown-body" key={post.id+index} marginBottom={12}>
                    <Text fontWeight={800}>{post.date.toUTCString().substring(0, 16)}</Text>
                    <Markdown>
                        {post.content}
                    </Markdown>
                    </Box>
                )
            })}
        </Box>
        </Box>
    )
}