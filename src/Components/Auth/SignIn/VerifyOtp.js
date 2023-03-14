import React, { useState } from "react";
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
import { PinInput, PinInputField } from '@chakra-ui/react';
import FixedSlider from '../FixedSlider';
import logo from "assets/images/other/logo_new.png";
import { NavLink, useHistory } from "react-router-dom";
import { FaLessThan } from "react-icons/fa";
import OtpInput from 'react-otp-input';

function VerifyOtp() {
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");

    const [otp, setOtp] = useState('')
    let history = useHistory();
    const handleChange = (otp) => {
        setOtp(otp)
    }
    const handleSubmit = () => {
        if (otp) {
            localStorage.setItem("otp", JSON.stringify(otp))
            history.push("/dashboard")
        }

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
                            src={logo}
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
                    <Box>
                        <VStack>
                            <Box w={'100%'} mt={8}>
                                <form onSubmit={handleSubmit}>
                                    <FormControl isRequired>
                                        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }} fontWeight={'400'}>
                                            Email security verification
                                        </Heading>

                                        <Box mt={2}>
                                            <Text noOfLines={2} color={textColorSecondary}>Please verify your email address <Text as="span" color='blue.200' _hover={{ cursor: 'pointer' }} >(username@mail.com)</Text> by entering
                                                the security code which is sent to your email address </Text>
                                        </Box>

                                        <Box mt={5}>
                                            <FormControl>
                                                <HStack>
                                                    <PinInput size={'lg'}>
                                                        <OtpInput
                                                            inputStyle={{
                                                                border: '1px solid black',
                                                                marginLeft: '20px',
                                                                width: '3vw',
                                                                height: '3vw',
                                                                borderRadius: '8px',
                                                            }}
                                                            value={otp}
                                                            onChange={handleChange}
                                                            numInputs={7}
                                                            separator={<span> </span>}
                                                            isInputSecure={'true'}
                                                            isInputNum={'true'}
                                                            shouldAutoFocus={'false'}
                                                        />
                                                    </PinInput>

                                                    {/* <PinInput size={'lg'} name="otp" value={otp} >
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                    </PinInput> */}
                                                </HStack>
                                            </FormControl>
                                        </Box>
                                        <Text mt={5} color={textColorSecondary}>You can resend the security code in 60 second(s)</Text>
                                        <Box mt={3}>
                                            <Flex mt={5}
                                                justifyContent='space-between'
                                                align='center' w={{ base: "100%", md: "100%", lg: '70%' }}
                                                id='otp'
                                                type='otp'>
                                            </Flex>
                                            <Box mt={5}>
                                                <Button colorScheme='blue' variant='solid' w={{ base: "100%", md: "100%", lg: '70%' }} id='submit' type='submit'>
                                                    Verify Otp
                                                </Button>
                                            </Box>
                                        </Box>
                                    </FormControl>
                                </form>
                            </Box>
                        </VStack>
                    </Box>
                    <Flex
                        flexDirection='column'
                        maxW='100%'
                        mt={5}
                        mb={5}>
                        <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
                            Wrong Email ?
                            <NavLink to='/auth/sign-in'>
                                <Text
                                    color={textColorBrand}
                                    as='span'
                                    ms='5px'
                                    fontWeight='500'>
                                    Change Here
                                </Text>
                            </NavLink>
                        </Text>
                    </Flex>
                </Box>
            </HStack>
        </>
    )
}

export default VerifyOtp
