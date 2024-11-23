import { ScaleFade } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import { useRef } from "react";

export default function Home({onDesktop}) {

  const portRef = useRef();
  
  return (
    <ScaleFade in={true}>
      
    </ScaleFade>

  )
}

Home.propTypes = {
  onDesktop: PropTypes.bool
}