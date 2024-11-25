import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Heading, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import PropTypes from 'prop-types';
import { useRef } from "react";



export default function Navigation({onDesktop}) {

  const nav = useNavigate();
  const btnref = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function Spacing() {
    return (
      <Text marginLeft={1} marginRight={1}>
        <span>|</span>
      </Text>
    )
  }
  
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' padding={4}>
      <Heading size='md' cursor={"pointer"} _hover={{color: 'primary.main'}} onClick={() => {nav('/')}}>HVT</Heading>
      <Box>
        <Button ref={btnref} onClick={onOpen} colorScheme="">
          <Icon as={HiOutlineMenuAlt3} w={6} h={6} />
        </Button>
        <Drawer finalFocusRef={btnref} isOpen={isOpen} onClose={onClose} placement="top" size='full'>
          <DrawerOverlay />
          <DrawerContent bgColor='background.main' color='text.main'>
            <DrawerCloseButton />
            <DrawerBody marginTop={24} display='flex' flexDir={'column'} alignItems={'center'} fontSize={24} fontWeight={600} textDecor={'underline'}>
              <Text cursor='pointer' _hover={{color: 'primary.main'}} onClick={() => {window.location = "/Resume.pdf"}} margin={4}>Resume</Text>
              <Text cursor='pointer' _hover={{color: 'primary.main'}} onClick={() => {window.location = 'https://github.com/hazyvt'}} margin={4}>Github</Text>
              <Text cursor='pointer' _hover={{color: 'primary.main'}} onClick={() => {window.location = 'https://twitter.com/hazyvt'}} margin={4}>Twitter</Text>
            </DrawerBody>
          </DrawerContent>

        </Drawer>
      </Box>
    </Box>
  )
}

Navigation.propTypes = {
  onDesktop: PropTypes.bool
}