import { Box, Center, useMediaQuery } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Navigation"
import Home from "./Pages/Home"
import Bobazilla from "./Pages/Bobazilla";

function App() {

  const [ onDesktop ] = useMediaQuery('(min-width: 600px)');

  return (
    <Box userSelect={'none'} maxW='100vw' minH='100vh' bgColor='#000' color='text.main' paddingBottom={128}>
      <Center>
      <Box w={onDesktop ? '40vw' : '80vw'} marginTop='4'>
      <Router>
        <Navigation onDesktop={onDesktop}/>
        <Routes>
          <Route path='/' element={<Home onDesktop={onDesktop} />} />
          <Route path='/work/bobazilla' element={<Bobazilla />} />
        </Routes>
      </Router>
      </Box>
      </Center>
    </Box>
  )
}

export default App
