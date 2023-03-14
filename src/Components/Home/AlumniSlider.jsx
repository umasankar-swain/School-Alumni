import {
    Card, CardHeader, CardBody, CardFooter,
    SimpleGrid,
    Box,
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    Container,
    Divider
} from "@chakra-ui/react";
import { React, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import AOS from 'aos';

function AlumniSlider() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
            <Container maxW="container.xl" mt={5} data-aos="zoom-in">
                <Center fontSize='4xl' fontWeight='semibold' >ALUMNI</Center>
                <Center><Divider borderRadius='10px' w='10%' border='2px' borderColor="red.500" mb={10} /></Center>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        // when window width is >= 576px
                        576: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 1024px
                        1024: {
                            spaceBetween: 10,
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerGroup: 2,
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                        <SwiperSlide>
                            <Box style={{ marginBottom: '45px' }} direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline' mx='5' my='4'
                                alignItems='center'
                                boxShadow='#000 0px 5px 14px -5px' rounded='2xl' bg='white'>
                                <Stack direction='row' >
                                    <Box w='100%' px={4} pt='4' >
                                        <Image
                                            objectFit='fill'
                                            borderRadius='full'
                                            boxSize='150px'
                                            maxW={{ base: '100%', sm: '200px' }}
                                            src='./assets/images/other/Awasthi.jpg'
                                            alt='Caffe Latte'
                                        />
                                    </Box>
                                    <Box w='100%' py='14'>
                                        <Text color='#006634' fontWeight='bold'>Awasthi, R.P.</Text>
                                        <Text fontWeight='bold'>Passing Year:1956</Text>
                                        <Text>Retd Professor</Text>
                                    </Box>
                                </Stack>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box style={{ marginBottom: '45px' }} direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline' mx='5' my='4'
                                alignItems='center'
                                boxShadow='#000 0px 5px 14px -5px' rounded='2xl' bg='white'>
                                <Stack direction='row' >
                                    <Box w='100%' px={4} pt='4' >
                                        <Image
                                            objectFit='fill'
                                            borderRadius='full'
                                            boxSize='150px'
                                            maxW={{ base: '100%', sm: '200px' }}
                                            src='./assets/images/other/Aditya.jpg'
                                            alt='Caffe Latte'
                                        />
                                    </Box>
                                    <Box w='100%' py='14'>
                                        <Text color='#006634' fontWeight='bold'>Awasthi, R.P.</Text>
                                        <Text fontWeight='bold'>Passing Year:1956</Text>
                                        <Text>Retd Professor</Text>
                                    </Box>
                                </Stack>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box style={{ marginBottom: '45px' }} direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                mx='5'
                                my='4'
                                alignItems='center'
                                boxShadow='#000 0px 5px 14px -5px' rounded='2xl' bg='white'>
                                <Stack direction='row' >
                                    <Box w='100%' px={4} pt='4' >
                                        <Image
                                            objectFit='fill'
                                            borderRadius='full'
                                            boxSize='150px'
                                            maxW={{ base: '100%', sm: '200px' }}
                                            src='./assets/images/other/banta.jpg'
                                            alt='Caffe Latte'
                                        />
                                    </Box>
                                    <Box w='100%' py='14'>
                                        <Text color='#006634' fontWeight='bold'>Awasthi, R.P.</Text>
                                        <Text fontWeight='bold'>Passing Year:1956</Text>
                                        <Text>Retd Professor</Text>
                                    </Box>
                                </Stack>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box style={{ marginBottom: '45px' }} direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline' mx='5' my='4'
                                alignItems='center'
                                boxShadow='#000 0px 5px 14px -5px' rounded='2xl' bg='white'>
                                <Stack direction='row' >
                                    <Box w='100%' px={4} pt='4' >
                                        <Image
                                            objectFit='fill'
                                            borderRadius='full'
                                            boxSize='150px'
                                            maxW={{ base: '100%', sm: '200px' }}
                                            src='./assets/images/other/pallavi.jpg'
                                            alt='Caffe Latte'
                                        />
                                    </Box>
                                    <Box w='100%' py='14'>
                                        <Text color='#006634' fontWeight='bold'>Awasthi, R.P.</Text>
                                        <Text fontWeight='bold'>Passing Year:1956</Text>
                                        <Text>Retd Professor</Text>
                                    </Box>
                                </Stack>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box style={{ marginBottom: '45px' }} direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline' mx='5' my='4'
                                alignItems='center'
                                boxShadow='#000 0px 5px 14px -5px' rounded='2xl' bg='white'>
                                <Stack direction='row' >
                                    <Box w='100%' px={4} pt='4' >
                                        <Image
                                            objectFit='fill'
                                            borderRadius='full'
                                            boxSize='150px'
                                            maxW={{ base: '100%', sm: '200px' }}
                                            src='./assets/images/other/Butail.jpg'
                                            alt='Caffe Latte'
                                        />
                                    </Box>
                                    <Box w='100%' py='14'>
                                        <Text color='#006634' fontWeight='bold'>Awasthi, R.P.</Text>
                                        <Text fontWeight='bold'>Passing Year:1956</Text>
                                        <Text>Retd Professor</Text>
                                    </Box>
                                </Stack>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box style={{ marginBottom: '45px' }} direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline' mx='5' my='4'
                                alignItems='center'
                                boxShadow='#000 0px 5px 14px -5px' rounded='2xl' bg='white'>
                                <Stack direction='row' >
                                    <Box w='100%' px={4} pt='4' >
                                        <Image
                                            objectFit='fill'
                                            borderRadius='full'
                                            boxSize='150px'
                                            maxW={{ base: '100%', sm: '200px' }}
                                            src='./assets/images/other/Chaudhary_Shikha.jpg'
                                            alt='Caffe Latte'
                                        />
                                    </Box>
                                    <Box w='100%' py='14'>
                                        <Text>Awasthi, R.P.</Text>
                                        <Text fontWeight='bold'>Passing Year:1956</Text>
                                        <Text>Retd Professor</Text>
                                    </Box>
                                </Stack>
                            </Box>
                        </SwiperSlide>
                    </SimpleGrid>

                </Swiper >
            </Container>
        </>

    )
}

export default AlumniSlider
