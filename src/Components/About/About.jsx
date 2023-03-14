import AOS from 'aos';
import "aos/dist/aos.css";
import Aos from "aos";
import {
  Box,
  Text,
  List,
  Stack,
  Image,
  VStack,
  ListItem,
  Container,
  ListIcon,
} from '@chakra-ui/react';
import React, { useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <Box>
      <Box w='100%'>
        <Image w='100%' h='450px' objectFit='cover' borderBottom='10px solid #ce972c' src='./assets/images/other/about.jpg' />
        <Text fontSize='35px' pl='15px' color='white' position='relative' top='-215px'>/About</Text>
      </Box>
      <VStack pt='50px'>
        <Container maxW="container.xl">
          {/* container.xl */}
          <Stack direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing='20px'>
            <Box w='100%' data-aos="zoom-in">
              <Image src='./assets/images/other/about-img.jpg' />
            </Box>
            <Box w='100%' data-aos="fade-left">
              <Text fontSize='25px' fontWeight='bold' mb={4}>About Us</Text>
              <Text as='i' fontSize='20px'>
                Welcome to the official website of St. Paul’s Senior Secondary
                School and thank you your interest. St. Paul’s Senior Secondary
                School was established in 1923.
              </Text>
              <List spacing={3} fontSize='20px'>
                <ListItem mt={2}>
                  <ListIcon as={FaRegCheckCircle} color='green.500' />
                  The school is located in the heart of the city spread over 20 acres of lush green area.
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={FaRegCheckCircle} color='green.500' />
                  The Rev. F.S. Ford was its founder Principal. It became a full fledged High School in
                  1935 and was converted into a co-educational school in the year 1967.
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Text fontSize='20px' mt={4} data-aos="fade-right">It is an institution where it provides many opportunities for children to grow tremendously not only
            in terms of education but also to make them competitive and self reliant and add valuable contributions to
            society and we encourage them to enjoy their own and others success.
          </Text>
          <Box mt={4} data-aos="zoom-in">
            <Text fontSize='25px' fontWeight='bold'>House System</Text>
            <Text mt={3} as='i' fontSize='20px'>
              To make for more effective and democratic management and discipline and to foster spirited corps and a deep love for the
              Alma Mater, the school has established the house system.
            </Text>
          </Box>
          <List mt={4} spacing={3} fontSize='20px' data-aos="zoom-in">
            <ListItem mt={4} data-aos="zoom-in">
              <ListIcon as={FaRegCheckCircle} color='green.500' />
              The students are divided into four houses. These four houses work in a spirit of
              co-operation and competition to achieve the standard of excellence set for them.
            </ListItem>
            <ListItem mt={4} data-aos="zoom-in">
              <ListIcon as={FaRegCheckCircle} color='green.500' />
              Teachers are assisted by house captains and vice-captains, and are in charge
              of the respective houses. Most of the activities held on campus are Inter house, where
              students take part with full devotion and dedication and try to bring fame and glory to their houses.
            </ListItem>
          </List>
          <Text fontSize='25px' mt={4} fontWeight='bold' data-aos="zoom-in">Prefectatorial System</Text>
          <Text fontSize='20px' mt={4} data-aos="zoom-in">
            In order to make more effective and democratic management and discipline, and to develop leadership
            qualities, Prefects are appointed from each house by the students of that particular house.
            The students are elected on the basis of performance of individuals.
          </Text>
        </Container>
      </VStack>
    </Box>
  )
}

export default About
