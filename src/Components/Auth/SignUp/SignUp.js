import React from "react";
import { NavLink } from "react-router-dom";
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
    Select,
} from "@chakra-ui/react";
// Custom components
// import { HSeparator } from "components/separator/Separator";
// import DefaultAuth from "layouts/auth/Default";
// Assets
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { FaLessThan } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import avtar from "assets/img/auth/signup-image-1.png";
// import avtar1 from "assets/img/auth/signub-image-1.png";
// import avtar2 from "assets/img/auth/signup-image-3.png";
// import avtar3 from "assets/img/auth/signup-image-4.png";
// import logo from "assets/images/other/logo_new.png";

function SignUp() {
    // Chakra color mode
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
    const googleText = useColorModeValue("navy.700", "white");
    const googleHover = useColorModeValue(
        { bg: "gray.200" },
        { bg: "whiteAlpha.300" }
    );
    const googleActive = useColorModeValue(
        { bg: "secondaryGray.300" },
        { bg: "whiteAlpha.200" }
    );
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    var settings = {
        dots: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    const handleSubmit = () => {
        console.log('hello world')
    }

    return (
        <HStack direction={['column', 'row']} height='100vh' className="container" overflow={'hidden'} bg={'white'}>
            <Show above='md'>
                <Box
                    position={'sticky'}
                    w='50%'
                    className='customSlide'
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
                            }
                            ,
                            mt: '40px'
                        },
                    }}
                >
                    <Slider {...settings}>
                        <Box>
                            <Image
                                // src={avtar}
                                boxSize='md'
                                objectFit='cover'
                            />
                            <Center><Text fontSize={'25px'} fontWeight={'bold'} mt={{ base: '5px', md: '5px', lg: '10px' }} >Connect with your Institute</Text></Center>
                        </Box>
                        <Box>
                            <Image
                                // src={avtar1}
                                boxSize='md'
                                objectFit='cover'
                            />
                            <Center><Text fontSize={'25px'} fontWeight={'bold'} mt={{ base: '5px', md: '5px', lg: '10px' }} >Get updates from institute and alumni</Text></Center>
                        </Box>
                        <Box>
                            <Image
                                // src={avtar2}
                                boxSize='md'
                                objectFit='cover'
                            />
                            <Center><Text fontSize={'25px'} fontWeight={'bold'} mt={{ base: '5px', md: '5px', lg: '10px' }} >Post, Apply, Refer & Recommend jobs</Text></Center>
                        </Box>
                        <Box>
                            <Image
                                // src={avtar3}
                                boxSize='md'
                                objectFit='cover'
                            />
                            <Center><Text fontSize={'25px'} fontWeight={'bold'} mt={{ base: '5px', md: '5px', lg: '10px' }} >Join Professional & Social groups</Text></Center>
                        </Box>
                    </Slider>
                </Box>
                <Divider orientation='vertical' variant={'dashed'} borderColor={'grey'} height='100vh' />
            </Show>

            <Box
                overflowY='scroll'
                w='100%'
                pl={{ base: '7%', md: '7%', lg: '7%' }}
                pr={{ base: '7%', md: '7%', lg: '0%' }}
                className='signUpCss'
                h='100vh'
            >
                <HStack color={textColorSecondary}
                    fontWeight='400'
                    fontSize='md' className="backbtn">
                    <Box>
                        <FaLessThan />
                    </Box>
                    <Box>
                        <NavLink to={'/home'}>
                            <Text>
                                Back to Home
                            </Text>
                        </NavLink>
                    </Box>
                </HStack>
                <Box>
                    <Image mx={{ base: "auto", lg: "unset" }}
                        mt={10}
                        src={'./assets/images/other/logo_new.png'}
                        boxSize='100px'
                    />
                    <Heading color={textColor} fontSize='34px' mt={12}>
                        Welcome To Register
                    </Heading>
                    <Text
                        color={textColorSecondary}
                        fontWeight='400'
                        fontSize='md'>
                        Sign up to continue to St. Paul’s Alumni.
                    </Text>
                </Box>
                <VStack>
                    <Box w={'100%'}>
                        <form onSubmit={handleSubmit}>
                            <FormControl isRequired aria-autocomplete="none">
                                <Box mt={5}>
                                    <FormLabel htmlFor='firstName' fontSize='lg'>First Name</FormLabel>
                                    <InputGroup w={{ base: "100%", md: "100%", lg: '70%' }} id='firstName' type='text'>
                                        <Input
                                            placeholder='Enter first name'
                                        />
                                    </InputGroup>
                                </Box>
                                <Box mt={5}>
                                    <FormLabel htmlFor='lastName' fontSize='lg'>Last Name</FormLabel>
                                    <InputGroup w={{ base: "100%", md: "100%", lg: '70%' }} id='lastName' type='text'>
                                        <Input
                                            placeholder='Enter last name'
                                        />
                                    </InputGroup>
                                </Box>
                                <Box mt={5}>
                                    <FormLabel htmlFor='email' fontSize='lg'>Email address</FormLabel>
                                    <InputGroup w={{ base: "100%", md: "100%", lg: '70%' }} id='email' type='email'>
                                        <Input
                                            placeholder='Enter email'
                                        />
                                    </InputGroup>
                                </Box>
                                {/* <Box mt={5}>
                                    <FormLabel fontSize='lg' htmlFor='password'>Password</FormLabel>
                                    <InputGroup w={{ base: "100%", md: "100%", lg: '70%' }} id='password'>
                                        <Input
                                            type={show ? "text" : "password"}
                                            placeholder='Enter password'

                                        />
                                        <InputRightElement display='flex' alignItems='center' mt='4px'>
                                            <Icon
                                                color={textColorSecondary}
                                                _hover={{ cursor: "pointer" }}
                                                as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                                                onClick={handleClick}
                                            />
                                        </InputRightElement>
                                    </InputGroup>
                                </Box>
                                <Box mt={5}>
                                    <FormLabel fontSize='lg' htmlFor='confirmPassword'>Confirm Password</FormLabel>
                                    <InputGroup w={{ base: "100%", md: "100%", lg: '70%' }} id='confirmPassword'>
                                        <Input
                                            type={show ? "text" : "password"}
                                            placeholder='Enter confirm password'

                                        />
                                    </InputGroup>
                                </Box> */}
                                <Box mt={5}>
                                    <FormLabel htmlFor='location' fontSize='lg'>Your current location</FormLabel>
                                    <InputGroup w={{ base: "100%", md: "100%", lg: '70%' }} id='location' type='text'>
                                        <Input
                                            placeholder='Enter location'
                                        />
                                    </InputGroup>
                                </Box>
                                <Box mt={5}>
                                    <FormLabel htmlFor='mobile' fontSize='lg'>Mobile Number</FormLabel>
                                    <InputGroup w={{ base: "100%", md: "100%", lg: '70%' }} id='mobile' type='number'>
                                        <Input
                                            placeholder='Enter mobile number'
                                        />
                                    </InputGroup>
                                </Box>
                                <Box mt={5}>
                                    <FormLabel htmlFor='designation' fontSize='lg'>Select Designation</FormLabel>
                                    <Select w={{ base: "100%", md: "100%", lg: '70%' }} id='designation' placeholder='I am'>
                                        <option>Student</option>
                                        <option>Alumnus</option>
                                        <option>Faculty</option>
                                    </Select>
                                </Box>
                                <Box mt={5}>
                                    <Button colorScheme='blue' variant='solid' w={{ base: "100%", md: "100%", lg: '70%' }} id='submit' type='submit'>
                                        Sign Up
                                    </Button>
                                </Box>
                            </FormControl>
                        </form>
                    </Box>
                </VStack>
                <Flex align='center' mt={2} mb='25px' w={{ base: "100%", md: "100%", lg: '70%' }}>
                    {/* <HSeparator /> */}
                    <Text color='gray.400' mx='14px'>
                        or
                    </Text>
                    {/* <HSeparator /> */}
                </Flex>
                <Box>
                    <Button
                        w={{ base: "100%", md: "100%", lg: '70%' }}
                        colorScheme={'facebook'}
                        leftIcon={<FaFacebook />}>
                        <Center>
                            <Text>Continue with Facebook</Text>
                        </Center>
                    </Button>
                    <Button mt={5} w={{ base: "100%", md: "100%", lg: '70%' }}
                        variant={'solid'} leftIcon={<FcGoogle />}>
                        <Center>
                            <Text>Sign in with Google</Text>
                        </Center>
                    </Button>
                </Box>
                <Flex
                    flexDirection='column'
                    maxW='100%'
                    mt={5}
                    mb={5}>
                    <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
                        Already have an account?
                        <NavLink to='/auth/sign-in'>
                            <Text
                                color={textColorBrand}
                                as='span'
                                ms='5px'
                                fontWeight='500'>
                                Login here
                            </Text>
                        </NavLink>
                    </Text>
                </Flex>
            </Box>
        </HStack >
    )
}

export default SignUp
