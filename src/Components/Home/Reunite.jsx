import React, { useEffect } from "react";
import {
    Box,
    Tab,
    Text,
    Link,
    Tabs,
    Stack,
    Image,
    Center,
    Button,
    Divider,
    TabList,
    TabPanel,
    Container,
    TabPanels,
} from '@chakra-ui/react';
import AOS from 'aos';
import { ArrowForwardIcon } from '@chakra-ui/icons'

function Reunite() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
            <Box className='reunite' mt='100px'>
                <Container maxW="container.xl">
                    <Stack className='content' direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} spacing='30px'>
                        <Box w='100%' textAlign='left' data-aos="zoom-in">
                            <Text fontSize='20px' fontWeight='500'>To Re-Unite in the nest from where we grew and flew off…........</Text>
                            <Text mt={3} >
                                The concept of Alumni association evolved for needs from both the ends i.e. academicians and professionals
                                in the aim of building a bridge between the school life and carrier life,
                                So that the students are inspired to face the current challenges of the competitive professional world.
                            </Text><br />
                            <Text mt={3} >
                                The idea and vision took shape and formation of alumni association turned into reality, in the year 2013 at St.
                                Paul’s Sr. Sec School in the presence of Principal Revd. Virendra Pal Singh, members of the faculty and many enthusiastic former students of the school. This event is always cherished since then. It comes with
                                a joyous mood and leaves us all refreshing for the next meet with a broader prospect of a successful association
                            </Text>
                            <Button mt={3} rightIcon={<ArrowForwardIcon />}
                                _hover={{
                                    background: "#e03a3c",
                                    color: 'white'
                                }}
                                borderColor='#e03a3c' variant='outline'>
                                About Us
                            </Button>
                        </Box>

                        <Box w='100%' data-aos="zoom-in">
                            <Stack direction={['column', 'row']} spacing='10px'>
                                <Box w='100%'>
                                    <Center >
                                        <Image
                                            boxSize='200px'
                                            objectFit='cover'
                                            src='./assets/images/other/pk.jpg'
                                            alt='The Most Rev Pk Samantaroy'
                                            borderRadius='lg'
                                        />
                                    </Center>
                                    <Box textAlign='center' mt='3'>
                                        <Text fontWeight='500' color='#006634'>The Most Rev Pk Samantaroy</Text>
                                        <Text>Chairman</Text>
                                        <Text color='#848484'>
                                            St. Paul’s Sr. Secondary School, Palampur is a school which has
                                        </Text>
                                        <Link as='' href='' color='#cd9933'>Read More</Link>
                                    </Box>
                                </Box>
                                <Box w='100%'>
                                    <Center>
                                        <Image
                                            boxSize='200px'
                                            objectFit='cover'
                                            src='./assets/images/other/Virender.jpg'
                                            alt='The Rev Virendra Pal Singh'
                                            borderRadius='lg'
                                        />
                                    </Center>
                                    <Box textAlign='center' mt='3'>
                                        <Text fontWeight='500' color='#006634'>The Rev Virendra Pal Singh</Text>
                                        <Text>Principal</Text>
                                        <Text color='#848484'>
                                            The St. Paul’s Senior Secondary School, Palampur was established in 1923. As...
                                        </Text>
                                        <Link href='' color='#cd9933'>Read More</Link>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            {/* ---------------------------------------------------Activity------------------------------------------- */}
            <Container maxW="container.xl">
                <Box mt={90} data-aos="fade-up">
                    <Center fontSize='4xl' fontWeight='semibold' >ACTIVITY</Center>
                    <Center><Divider borderRadius='10px' w='10%' border='2px' borderColor="red.500" mb={10} /></Center>
                    <Tabs isFitted variant='unstyled'>
                        <Center>
                            <TabList mb="1em">
                                <Stack direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
                                // spacing={{ base: "5px", md: "5px", lg: '20px' }}
                                >
                                    <Box  >
                                        <Tab _selected={{ color: 'white', bg: '#ca0000 ' }}
                                            fontSize='larger'
                                            border='1px'
                                            borderRadius='3px'
                                        >
                                            Lorem ipsum dolor
                                        </Tab>
                                    </Box>
                                    <Box  >
                                        <Tab _selected={{ color: 'white', bg: '#ca0000 ' }}
                                            fontSize='larger'
                                            border='1px'
                                            borderRadius='3px'
                                        >
                                            Lorem ipsum dolor
                                        </Tab>
                                    </Box>
                                    <Box  >
                                        <Tab _selected={{ color: 'white', bg: '#ca0000 ' }}
                                            fontSize='larger'
                                            border='1px'
                                            borderRadius='3px'
                                        >
                                            Lorem ipsum dolor
                                        </Tab>
                                    </Box>
                                    <Box  >
                                        <Tab _selected={{ color: 'white', bg: '#ca0000 ' }}
                                            fontSize='larger'
                                            border='1px'
                                            borderRadius='3px'
                                        >
                                            Lorem ipsum dolor
                                        </Tab>
                                    </Box>
                                </Stack>
                            </TabList>
                        </Center>
                        <Divider />
                        <TabPanels>
                            <TabPanel>
                                <Stack direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
                                    <Box w='100%'>
                                        <Text fontSize='20px' fontWeight='500'>Lorem ipsum dolor sit amet consectetur adipisicing elit?</Text>
                                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni odio pariatur rem fuga, nemo
                                            iure veniam deleniti provident unde
                                            debitis id maiores accusamus, facilis repudiandae esse velit eum optio!</Text>
                                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni odio pariatur rem fuga, nemo
                                            iure veniam deleniti provident unde
                                            debitis id maiores accusamus, facilis repudiandae esse velit eum optio!</Text>
                                    </Box>
                                    <Box boxSize='sm' w='100%'>
                                        <Image src='./assets/images/other/tabs-1.jpg' alt='lorem' />
                                    </Box>
                                </Stack>
                            </TabPanel>
                            <TabPanel>
                                <Stack direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
                                    <Box w='100%'>
                                        <Text fontSize='20px' fontWeight='500'>Lorem ipsum dolor sit amet consectetur adipisicing elit?</Text>
                                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni odio pariatur rem fuga, nemo
                                            iure veniam deleniti provident unde
                                            debitis id maiores accusamus, facilis repudiandae esse velit eum optio!</Text>
                                    </Box>
                                    <Box boxSize='sm' w='100%'>
                                        <Image src='./assets/images/other/tabs-2.jpg' alt='lorem' />
                                    </Box>
                                </Stack>
                            </TabPanel>
                            <TabPanel>
                                <Stack direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
                                    <Box w='100%'>
                                        <Text fontSize='20px' fontWeight='500'>Lorem ipsum dolor sit amet consectetur adipisicing elit?</Text>
                                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni odio pariatur rem fuga, nemo
                                            iure veniam deleniti provident unde
                                            debitis id maiores accusamus, facilis repudiandae esse velit eum optio!</Text>
                                    </Box>
                                    <Box boxSize='sm' w='100%'>
                                        <Image src='./assets/images/other/tabs-3.jpg' alt='lorem' />
                                    </Box>
                                </Stack>
                            </TabPanel>
                            <TabPanel>
                                <Stack direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
                                    <Box w='100%'>
                                        <Text fontSize='20px' fontWeight='500'>Lorem ipsum dolor sit amet consectetur adipisicing elit?</Text>
                                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni odio pariatur rem fuga, nemo
                                            iure veniam deleniti provident unde
                                            debitis id maiores accusamus, facilis repudiandae esse velit eum optio!</Text>
                                    </Box>
                                    <Box boxSize='sm' w='100%'>
                                        <Image src='./assets/images/other/tabs-4.jpg' alt='lorem' />
                                    </Box>
                                </Stack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Container>
        </>
    )
}

export default Reunite
