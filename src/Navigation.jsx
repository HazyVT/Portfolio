import { Box, Button, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { HiOutlineMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';



export default function Navigation({onDesktop}) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const nav = useNavigate();

  function MobileNav() {
    return (
      <Box display={!onDesktop ? 'block' : 'none'}>
        <Button onClick={onOpen} bgColor='red.300' color='white' _hover={{bgColor: 'red.400'}}><Icon as={HiOutlineMenu} w={4} h={4}/></Button>
        <Drawer isOpen={isOpen} onClose={onClose} placement="right" size='xs'>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <DrawerCloseButton />
              <Heading size='sm' onClick={() => {nav('/'); onClose();}}>HVT</Heading>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }
  
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' padding={4}>
      <Heading cursor={"pointer"} _hover={{color: 'red.300'}} onClick={() => {nav('/')}}>HVT</Heading>
      <Box display={onDesktop ? 'flex' : 'none'} w={'12vw'} justifyContent={'space-around'}>
        <Text cursor={"pointer"} _hover={{color: 'red.300'}} onClick={() => {window.location = "/Resume.pdf"}}>Resume</Text>
      </Box>
      <MobileNav />
    </Box>
  )
}

Navigation.propTypes = {
  onDesktop: PropTypes.bool
}