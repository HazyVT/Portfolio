import { Box, Center, useMediaQuery } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Navigation"
import Home from "./Pages/Home"

function App() {

  const [ onDesktop ] = useMediaQuery('(min-width: 600px)');

  return (
    <Box userSelect={'none'} maxW='100vw' minH='100vh' bgColor='background.main' color='text.main'>
      <Center>
      <Box w='80vw'>
      <Router>
        <Navigation onDesktop={onDesktop}/>
        <Routes>
          <Route path='/' element={<Home onDesktop={onDesktop}/>} />
        </Routes>
      </Router>
      </Box>
      </Center>
    </Box>
  )
}

export default App
