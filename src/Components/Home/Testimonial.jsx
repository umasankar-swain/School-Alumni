import {
    Box,
    Text,
    Image,
    Stack,
    Center,
    Divider,
    Container,
    SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import AOS from 'aos';

function Testimonial() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <>
            <Container maxW="container.xl" id='testimonials'>
                <Box mt={{base:'-100px',sm:'120px',md:'60px',lg:'100px'}} data-aos="fade-up">
                    <Center fontSize='4xl' fontWeight='semibold' >TESTIMONIALS</Center>
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
                                <Box boxShadow='#000 0px 5px 14px -5px' style={{ marginBottom: '50px' }} borderRadius={8} px={5} mx={3} my={4}>
                                    <Stack direction='row' py={2}>
                                        <Box w='100%'>
                                            <Image
                                                src='./assets/images/testimonials/testimonials-1.jpg'
                                                alt='The Most Rev Pk Samantaroy'
                                                borderRadius='lg'
                                                boxSize='140px'
                                            />
                                        </Box>
                                        <Box w='100%' py={2}>
                                            <Text fontWeight='bold'>Saul Goodman</Text>
                                            <Text>Ceo &amp; Founder</Text>
                                        </Box>
                                    </Stack>
                                    <Stack direction='row' py={3}>
                                        <Box><FaQuoteLeft />
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                                            Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <FaQuoteRight /></Box>
                                    </Stack>
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box boxShadow='#000 0px 5px 14px -5px' style={{ marginBottom: '50px' }} borderRadius={8} px={5} mx={3} my={4}>
                                    <Stack direction='row' py={2}>
                                        <Box w='100%'>
                                            <Image
                                                src='./assets/images/testimonials/testimonials-2.jpg'
                                                alt='The Most Rev Pk Samantaroy'
                                                borderRadius='lg'
                                                boxSize='140px'
                                            />
                                        </Box>
                                        <Box w='100%' py={2}>
                                            <Text fontWeight='bold'>Sara Wilsson</Text>
                                            <Text>Designer</Text>
                                        </Box>
                                    </Stack>
                                    <Stack direction='row' py={3}>
                                        <Box><FaQuoteLeft />
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                                            Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <FaQuoteRight /></Box>
                                    </Stack>
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box boxShadow='#000 0px 5px 14px -5px' style={{ marginBottom: '50px' }} borderRadius={8} px={5} mx={3} my={4}>
                                    <Stack direction='row' py={2}>
                                        <Box w='100%'>
                                            <Image
                                                src='./assets/images/testimonials/testimonials-3.jpg'
                                                alt='The Most Rev Pk Samantaroy'
                                                borderRadius='lg'
                                                boxSize='140px'
                                            />
                                        </Box>
                                        <Box w='100%' py={2}>
                                            <Text fontWeight='bold'>Jena Karlis</Text>
                                            <Text>Store Owner</Text>
                                        </Box>
                                    </Stack>
                                    <Stack direction='row' py={3}>
                                        <Box><FaQuoteLeft />
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                                            Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <FaQuoteRight /></Box>
                                    </Stack>
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box boxShadow='#000 0px 5px 14px -5px' style={{ marginBottom: '50px' }} borderRadius={8} px={5} mx={3} my={4}>
                                    <Stack direction='row' py={2}>
                                        <Box w='100%'>
                                            <Image
                                                src='./assets/images/testimonials/testimonials-4.jpg'
                                                alt='The Most Rev Pk Samantaroy'
                                                borderRadius='lg'
                                                boxSize='140px'
                                            />
                                        </Box>
                                        <Box w='100%' py={2}>
                                            <Text fontWeight='bold'>Matt Brandon</Text>
                                            <Text>Freelancer</Text>
                                        </Box>
                                    </Stack>
                                    <Stack direction='row' py={3}>
                                        <Box><FaQuoteLeft />
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                                            Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <FaQuoteRight /></Box>
                                    </Stack>
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box boxShadow='#000 0px 5px 14px -5px' style={{ marginBottom: '50px' }} borderRadius={8} px={5} mx={3} my={4}>
                                    <Stack direction='row' py={2}>
                                        <Box w='100%'>
                                            <Image
                                                src='./assets/images/testimonials/testimonials-5.jpg'
                                                alt='The Most Rev Pk Samantaroy'
                                                borderRadius='lg'
                                                boxSize='140px'
                                            />
                                        </Box>
                                        <Box w='100%' py={2}>
                                            <Text fontWeight='bold'>John Larson</Text>
                                            <Text>Entrepreneur</Text>
                                        </Box>
                                    </Stack>
                                    <Stack direction='row' py={3}>
                                        <Box><FaQuoteLeft />
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                                            Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <FaQuoteRight /></Box>
                                    </Stack>
                                </Box>
                            </SwiperSlide>
                        </SimpleGrid>

                    </Swiper >
                </Box>
            </Container>
        </>
    )
}

export default Testimonial
