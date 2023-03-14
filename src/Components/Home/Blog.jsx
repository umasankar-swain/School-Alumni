import {
    Box,
    Text,
    Button,
    Image,
    Stack,
    HStack,
    Center,
    Divider,
    Container,
} from '@chakra-ui/react';
import { React, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { ArrowUpIcon } from '@chakra-ui/icons';
import { HashLink as Link1 } from 'react-router-hash-link';
import AOS from 'aos';

function Blog() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <Container maxW="container.xl">
            <Box mt='80px' data-aos="fade-up">
                <Center fontSize='4xl' fontWeight='semibold'>BLOG</Center>
                <Center><Divider borderRadius='10px' w='10%' border='2px' borderColor="red.500" mb={10} /></Center>
                <Text fontSize={20} textAlign='center'>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
                    Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                </Text>
                <Stack direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing={['30px', '30px', '30px', '20px']} mt={3} textAlign='center'>
                    <Box boxShadow='base' px={{ base: '10px', sm: '10px', md: '2px', lg: '2px' }} py={3} rounded='md' bg='white' borderRadius={10}>
                        <Image
                            src='./assets/images/blog/blog-1.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Divider />
                        <Stack mt='6' spacing='3'>
                            <Text fontWeight='bold'>Project Title</Text>
                            <Text as='i' color='#848484' >November 11, 2022</Text>
                            <Text color='#848484'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                molestias exercitationem eligendi quibusdam labore officiis hic consequuntur?
                            </Text>
                            <Center><HStack
                                px={2}
                                py={1}
                                _hover={{
                                    border: '1px black solid',
                                    borderRadius: '4px',
                                }}
                            ><Box>Read More</Box><Box><FaArrowRight /></Box></HStack ></Center>
                        </Stack>
                    </Box>
                    <Box boxShadow='base' px={1} py={3} rounded='md' bg='white' borderRadius={10}>

                        <Image
                            src='./assets/images/blog/blog-2.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Text fontWeight='bold'>Project Title</Text>
                            <Text as='i' color='#848484' >November 11, 2022</Text>
                            <Text color='#848484'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                molestias exercitationem eligendi quibusdam labore officiis hic consequuntur?
                            </Text>
                            <Center><HStack
                                px={2}
                                py={1}
                                _hover={{
                                    border: '1px black solid',
                                    borderRadius: '4px',
                                }}
                            ><Box>Read More</Box><Box><FaArrowRight /></Box></HStack ></Center>
                        </Stack>
                    </Box>
                    <Box boxShadow='base' px={1} py={3} rounded='md' bg='white' borderRadius={10}>
                        <Image
                            src='./assets/images/blog/blog-3.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            objectFit='cover'
                        />
                        <Stack mt='6' spacing='3'>
                            <Text fontWeight='bold'>Project Title</Text>
                            <Text as='i' color='#848484' >November 11, 2022</Text>
                            <Text color='#848484'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                molestias exercitationem eligendi quibusdam labore officiis hic consequuntur?
                            </Text>
                            <Center><HStack
                                px={2}
                                py={1}
                                _hover={{
                                    border: '1px black solid',
                                    borderRadius: '4px',
                                }}
                            ><Box>Read More</Box><Box><FaArrowRight /></Box></HStack ></Center>
                        </Stack>


                    </Box>
                    <Box boxShadow='base' px={1} py={3} rounded='md' bg='white' borderRadius={10}>
                        <Image
                            src='./assets/images/blog/blog-4.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Text fontWeight='bold'>Project Title</Text>
                            <Text as='i' color='#848484' >November 11, 2022</Text>
                            <Text color='#848484'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                molestias exercitationem eligendi quibusdam labore officiis hic consequuntur?
                            </Text>
                            <Center><HStack
                                px={2}
                                py={1}
                                _hover={{
                                    border: '1px black solid',
                                    borderRadius: '4px',
                                }}
                            ><Box>Read More</Box><Box><FaArrowRight /></Box></HStack ></Center>
                        </Stack>
                    </Box>
                </Stack>
            </Box >
            <Box className='top-to-btm'>
                <Link1 smooth to={{ hash: "top" }}>
                    <Button colorScheme={'red'} className='icon-position icon-style' size={'sm'} position={'fixed'} bg='#ca0000'>
                        <ArrowUpIcon boxSize={5} />
                    </Button>
                </Link1>
            </Box>
        </Container >
    )
}

export default Blog
