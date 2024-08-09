import { Box, useMediaQuery } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Navigation"
import Home from "./Pages/Home"

function App() {

  const [ onDesktop ] = useMediaQuery('(min-width: 600px)');

  return (
    <Box userSelect={'none'} minW='100vw' minH='100vh' bgColor='#fffff4'>
      <Router>
        <Navigation onDesktop={onDesktop}/>
        <Routes>
          <Route path='/' element={<Home onDesktop={onDesktop}/>} />
        </Routes>
      </Router>
    </Box>
  )
}

export default App
