import { Box } from "@chakra-ui/react";
import HomePage from "./pages/Home";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPage from "./pages/Blog";
import Post from "./components/blog";
import { supabase } from "./components/supabase";

function App() {

    const [isLightTheme, setIsLightTheme ] = useState<boolean>(true);
    const [ posts, setPosts ] = useState<Post[]>([]);

    async function getBlogPosts() {
        const { data } = await supabase.from('blogpost').select('id, created_at, content');
        const nPosts: Post[] = [];
        data?.forEach((val) => {
            const post = new Post(val.id, val.content, val.created_at);
            nPosts.push(post);
        })

        nPosts.sort(function(a,b) {
            return b.date.getTime() - a.date.getTime();
        })
        setPosts(nPosts);
    }


    useEffect(() => {
        // Get theme from local storage
        const ls = localStorage.getItem('theme');
        if (ls == undefined) {
            localStorage.setItem('theme', 'light');
            document.body.className = "light"
        } else {
            if (ls == 'dark') {
                setIsLightTheme(false);
            document.body.className = "dark"
            } else {
                document.body.className = "light"
            }
        }

        getBlogPosts();
    }, [])    

    return (
        <Box maxW="100vw" minH='100vh' h='fit-content' bgColor={isLightTheme ? "bg.light" : "bg.dark"} color={isLightTheme ? "text.light" : 'text.dark'}>
            <BrowserRouter>
            <Navbar theme={isLightTheme} setTheme={setIsLightTheme} />
                <Routes>
                    <Route path="/" element={<HomePage theme={isLightTheme} setTheme={setIsLightTheme} />} />
                    <Route path="/blog" element={<BlogPage theme={isLightTheme} posts={posts} />} />
                </Routes>
            </BrowserRouter>
            
        </Box>
    );
}

export type Props = {
    theme: boolean,
    setTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export default App;
