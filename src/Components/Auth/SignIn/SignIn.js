import { NavLink, useNavigate } from "react-router-dom";
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
// Custom components
// import { HSeparator } from "components/separator/Separator";
// import DefaultAuth from "layouts/auth/Default";
import FixedSlider from "../FixedSlider";
// Assets
import { MdOutlineRemoveRedEye } from "react-icons/md";
// import logo from "/assets/images/other/logo_new.png";
import { RiEyeCloseLine } from "react-icons/ri";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook } from 'react-icons/fa';
import { FaLessThan } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import React, { useState } from "react";


function SignIn() {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const [show, setShow] = React.useState(false);
  const textColorSecondary = "gray.400";

  const [email, setEmail] = useState('')
  let navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.name = e.target.value)
  }
  const handleSubmit = () => {
    console.log(email)
    navigate("/auth/otp")
  }

  return (
    <>
      <HStack direction={['column', 'row']} height='100vh'
        overflow={'hidden'}
        bg={'white'}
      >
        <Show above='md'>
          <FixedSlider />
        </Show>

        <Box w='100%'
          pl={{ base: '7%', md: '7%', lg: '7%' }}
          pr={{ base: '7%', md: '7%', lg: '0%' }}
          overflowY='scroll'
          h='100vh'
        >
          <HStack color={textColorSecondary}
            fontWeight='400'
            fontSize='md' className="backbtn">
            <Box>
              <FaLessThan />
            </Box>
            <Box>
              <NavLink to={'/'}>
                <Text>
                  Back to Home
                </Text>
              </NavLink>
            </Box>
          </HStack>
          <Box>
            <Image mx={{ base: "auto", lg: "unset" }}
              mt={10}
              src='/assets/images/other/logo_new.png'
              boxSize='100px'
            />
            <Heading color={textColor} fontSize='34px' mt={12}>
              Welcome To Login
            </Heading>
            <Text
              color={textColorSecondary}
              fontWeight='400'
              fontSize='md'>
              Sign in to continue to St. Paul’s Alumni.
            </Text>
          </Box>
          <VStack>
            <Box w={'100%'}>
              <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                  <Box mt={5}>
                    <FormLabel htmlFor='email' fontSize='lg'>Email address</FormLabel>
                    <InputGroup w={{ base: "100%", md: "100%", lg: '70%' }} id='email' type='email'>
                      <Input
                        name="email"
                        value={email}
                        type='email'
                        placeholder='Enter email'
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Box>
                  <Box mt={5}>
                    <Flex mt={5}
                      justifyContent='space-between'
                      align='center' w={{ base: "100%", md: "100%", lg: '70%' }}
                      id='email'
                      type='email'>
                    </Flex>
                    <Box mt={5}>
                      <Button colorScheme='blue' variant='solid' w={{ base: "100%", md: "100%", lg: '70%' }} id='submit' type='submit'>
                        Get Otp
                      </Button>
                    </Box>
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
              Not registered yet?
              <NavLink to='/auth/sign-up'>
                <Text
                  color={textColorBrand}
                  as='span'
                  ms='5px'
                  fontWeight='500'>
                  Create an Account
                </Text>
              </NavLink>
            </Text>
          </Flex>
        </Box>
      </HStack >
    </>
  );
}

export default SignIn;
