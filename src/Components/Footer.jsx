import {
    Box,
    Text,
    Image,
    VStack,
    Link,
    Stack,
    HStack,
    Center,
    Button,
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

function v1Footer() {

    return (
        <Box>
            <VStack spacing={0}>
                <Box w='100%' color='white' pb={20} mt='40px' pt={10} bg='#1b1b1b' textAlign='center'>
                    <Text fontWeight='500' fontSize='30px'>Contact Us</Text>
                    <Text>Palampur Distt. Kangra H.P. 176061 (INDIA)</Text>
                    <Text>Landmark : Near Civil Courts, Opposite St. John’s Church</Text>
                    <Text>Phone:01894-235445</Text>
                    <Text>Email:stpaulsschool.palampur@gmail.com</Text>
                    <Center textAlign='center' mt={3}>
                        <Box backgroundColor='#000' fontSize='18px' borderRadius='md' px='8px' py='8px' mx={1}
                            _hover={{
                                background: "#e03a3c",
                            }}
                        ><FaFacebookSquare /></Box>
                        <Box backgroundColor='#000' fontSize='18px' borderRadius='md' px='8px' py='8px' mx={1}
                            _hover={{
                                background: "#e03a3c",
                            }}
                        ><FaInstagram /></Box>
                        <Box backgroundColor='#000' fontSize='18px' borderRadius='md' px='8px' py='8px' mx={1}
                            _hover={{
                                background: "#e03a3c",
                            }}
                        ><FaYoutube /></Box>
                    </Center>
                </Box>
                <Stack spacing={{ base: '20px', sm: '20px', md: '0px', lg: '0px' }} pt={5} pb={5} w='100%' px={20} color='white' bg='#000' direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
                    <Box mx={'auto'} textAlign={{ base: 'center', sm: 'center', md: 'left', lg: 'left' }} w='80%'>
                        <Text>&copy; Copyright Alumni. All Rights Reserved</Text>
                        <Text>Designed by <Link href='' color='#e03a3c' >Cybrain Software Solutions</Link></Text>
                    </Box >
                    <Box>
                        <Link>
                            <Image mx={'auto'} h='40px' objectFit='contain'
                                src='./assets/images/other/logo_white.png'>
                            </Image>
                        </Link>
                    </Box>
                </Stack>
            </VStack>
        </Box>
    )
}

export default v1Footer;
