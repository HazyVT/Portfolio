import { AbsoluteCenter, Box, Heading, Skeleton, Text } from "@chakra-ui/react";
import Post from "../components/blog";
import { useWindowWidth } from "@react-hook/window-size";
import { useNavigate } from "react-router-dom";

type blogProps = {
    theme: boolean,
    posts: Post[],
    loading: boolean
}

export default function BlogPage({theme, posts, loading} : blogProps) {

    const onlyWidth = useWindowWidth();
    const nav = useNavigate();

    /*
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
    */

    return (
        <AbsoluteCenter maxH='80vh'>
            <Heading margin={2}>Blog Posts</Heading>
            <Skeleton borderRadius={'12px'} w='fit-content' display={loading ? 'block' : 'none'}>
                <Box minW={onlyWidth > 700 ? '40vw' : '80vw'} margin={4} padding={4} border='2px solid'>
                    <Heading size='md'># Hello</Heading>
                    <Text>Tue, 25th May 2025</Text>
                </Box>
            </Skeleton>
            {posts.map((post, index) => { 
                return (
                    <Box key={post.id+index} margin={4} border="2px solid" borderColor={theme ? 'text.light' : 'text.dark'} padding={4} minW={onlyWidth > 700 ? '40vw' : '80vw'} borderRadius={'12px'} cursor="pointer" _hover={{backgroundColor: theme ? 'overlay.light' : 'overlay.dark'}} onClick={() => nav(`/blog/${post.id}`, {
                        state: {
                            post: post
                        }
                    })}>
                        <Heading size='md'>{post.content.split("\n")[0]}</Heading>
                        <Text>{post.date.toUTCString().substring(0, 16)}</Text>
                    </Box>
                )
            })}
        </AbsoluteCenter>
    )
}