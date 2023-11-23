import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    
      <Box bgColor={"white"} borderRadius={"5%"}>
        <VStack>
          <Image src={imageSrc} borderRadius={"5%"} />
          <Box>
            <VStack spacing={4} align={"start"} margin={5}>
              <Heading textColor={"black"} fontSize={20}>{title}</Heading>
              <Text textColor={"grey"} fontSize={15}>{description}</Text>
              <HStack>
                <Text textColor={"black"} fontSize={15}>See more</Text>
                <FontAwesomeIcon color={"black"} icon={faArrowRight} size="1x" />
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
  )
};

export default Card;
