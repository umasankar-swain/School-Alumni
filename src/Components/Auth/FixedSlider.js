import React from "react";
// Chakra imports
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    FormHelperText,
    Icon,
    Center,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    Image,
    useColorModeValue,
    HStack,
    Divider,
    Show,
    Hide,
    VStack,
} from "@chakra-ui/react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { FaLessThan } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import avtar from "assets/images/auth/signup-image-1.png";
// import avtar1 from "assets/images/auth/signub-image-1.png";
// import avtar2 from "assets/images/auth/signup-image-3.png";
// import avtar3 from "assets/images/auth/signup-image-4.png";
// import logo from "assets/images/other/logo_new.png";

function FixedSlider() {

    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
            <>
            <Box w='50%'
                position={'sticky'}
                sx={{
                    ".slick-dots": {
                        transform: "translateY(1em)"
                    },
                    ".slick-dots li button": {
                        _before: {
                            transition: "0.2s",
                            content: "''",
                            borderRadius: "100%",
                            background: "blue.500"
                        },
                        mt: '40px'
                    },
                }}
            >
                <Slider {...settings}>
                    <Box>
                        <Image
                            src={"/assets/images/auth/signup-image-1.png"}
                            boxSize='md'
                            objectFit='cover'
                        />
                        <Center><Text fontSize={'25px'} fontWeight={'bold'} mt={{ base: '5px', md: '5px', lg: '10px' }} >Connect with your Institute</Text></Center>
                    </Box>
                    <Box>
                        <Image
                            src={'/assets/images/auth/signub-image-1.png'}
                            boxSize='md'
                            objectFit='cover'
                        />
                        <Center><Text fontSize={'25px'} fontWeight={'bold'} mt={{ base: '5px', md: '5px', lg: '10px' }} >Get updates from institute and alumni</Text></Center>
                    </Box>
                    <Box>
                        <Image
                            src={'/assets/images/auth/signup-image-3.png'}
                            boxSize='md'
                            objectFit='cover'
                        />
                        <Center><Text fontSize={'25px'} fontWeight={'bold'} mt={{ base: '5px', md: '5px', lg: '10px' }} >Post, Apply, Refer & Recommend jobs</Text></Center>
                    </Box>
                    <Box>
                        <Image
                            src={'/assets/images/auth/signup-image-4.png'}
                            boxSize='md'
                            objectFit='cover'
                        />
                        <Center><Text fontSize={'25px'} fontWeight={'bold'} mt={{ base: '5px', md: '5px', lg: '10px' }} >Join Professional & Social groups</Text></Center>
                    </Box>
                </Slider>
            </Box>
            <Divider orientation='vertical' variant={'dashed'} borderColor={'grey'} height='100vh' />
            </>
    )
}

export default FixedSlider
