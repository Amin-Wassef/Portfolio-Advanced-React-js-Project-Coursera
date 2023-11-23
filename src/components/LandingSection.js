import React from "react";
import { Avatar, Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const picture = 'https://i.pravatar.cc/150?img=7';


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size="5x" name='Pete' src={picture} />    
    <Heading fontSize={18} fontFamily={"serif"}>{greeting}</Heading>
    <VStack fontSize={50} fontFamily={"cursive"}>
      <Box>
        {bio1}
      </Box>
      <Box>
        {bio2}
      </Box>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
