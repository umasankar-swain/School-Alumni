import AOS from 'aos';
import "aos/dist/aos.css";
import Aos from "aos";
import {
    Box,
    Stack,
    VStack,
    Container,
    Image,
    Text,
    HStack,
    Center,
    Divider,
    FormControl,
    Input,
    Textarea,
    Button
} from '@chakra-ui/react'
import {
    FaPhoneAlt,
    FaRegEnvelope,
    FaMapMarkedAlt,
} from "react-icons/fa";
import React, { useEffect } from "react";


function Contact() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <Box>
            <Box w='100%'>
                <Image w='100%' h='450px' objectFit='cover' borderBottom='10px solid #ce972c' src='./assets/images/other/about.jpg' />
                <Text fontSize='35px' pl='15px' color='white' position='relative' top='-215px'>/Contact</Text>
            </Box>
            <VStack pt='50px'>
                <Container maxW="container.xl" fontSize='16px'>
                    <Box data-aos="fade-left">
                        <Center fontSize='4xl' fontWeight='semibold' >CONTACT</Center>
                        <Center data-aos="fade-left">
                            <Divider borderRadius='10px' w='10%' border='2px' borderColor="red.500" mb={10} />
                        </Center>
                        <Text fontSize='20px'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
                            Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</Text>
                    </Box>
                    <Stack direction={{base:'column', sm:'column',md:'row',lg:'row'}} mt='5' spacing={{ base:"20px",sm:'20px', md: "10px", lg: '10px' }} textAlign='center'>
                        <Box w='100%' data-aos="zoom-in">
                            <VStack>
                                <Box w='100%' my='3' mt={0} boxShadow='0px 0px 12px -4px' p='6' rounded='md' bg='white'>
                                    <Center><FaMapMarkedAlt className='iconcls' /></Center>
                                    <Text fontSize='20px' fontWeight='bold'>Our Address</Text>
                                    <Text>A108 Adam Street, New York, NY 535022</Text>
                                </Box>
                                <Box w='100%'>
                                    <Stack direction={['column', 'row']}>
                                        <Box w='100%' boxShadow='0px 0px 12px -4px' p='6' rounded='md' bg='white'>
                                            <Center><FaRegEnvelope className='iconcls' /></Center>
                                            <Text fontSize='20px' fontWeight='bold'>Email Us</Text>
                                            <Text>info@example.com</Text>
                                            <Text>contact@example.com</Text>
                                        </Box>
                                        <Box w='100%' py={4} boxShadow='0px 0px 12px -4px' p='6' rounded='md' bg='white'>
                                            <Center><FaPhoneAlt className='iconcls' /></Center>
                                            <Text fontSize='20px' fontWeight='bold'>Call Us</Text>
                                            <Text>+1 5589 55488 55</Text>
                                            <Text>+1 6678 254445 41</Text>
                                        </Box>
                                    </Stack>
                                </Box>
                            </VStack>
                        </Box>

                        <Box w='100%' boxShadow='0px 0px 12px -4px' p='6' rounded='md' bg='white' textAlign='center' px='4' py='6' data-aos="zoom-in">
                            <FormControl>
                                <HStack my='2'>
                                    <Input type='email' placeHolder='Your Name' />
                                    <Input placeHolder='Your Email' />
                                </HStack>
                                <Input my='2' placeholder='Subject' />
                                <Textarea my='2' placeholder='Message' />
                                <Button
                                    colorScheme='red'
                                    type='submit'
                                >
                                    Send Message
                                </Button>
                            </FormControl>
                        </Box>
                    </Stack>
                </Container>
            </VStack>
        </Box>
    )
}
export default Contact;

