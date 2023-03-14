import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    Stack,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure, Image
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { HashLink as Link } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    })
    return (
        <Flex
            py={2}
            px={4}
            bg="#fff"
            pos="fixed" w="100%" zIndex={2}
            boxShadow='lg'
        >
            <Box w='100%'>
                <HStack spacing="10">
                    {isDesktop ? (
                        <>
                            <Flex alignItems="start" wrap="wrap" >
                                <Flex flexGrow={1} justify="center" /*border='1px'*/>
                                    {/* <Heading ml={[4, 0]}>Zensurance</Heading> */}
                                    <Box ml={[4, 8]}>
                                        <Image
                                            src='./assets/images/other/logo.png'
                                            alt=''
                                            w={250}
                                        />
                                    </Box>
                                </Flex>
                            </Flex>

                            <Flex justifyContent='end' fontSize='20' mr={5} fontWeight={500} flex="1">
                                <HStack spacing={10} className='desktopNav'>
                                    <NavLink to="/" >Home</NavLink>
                                    <NavLink to="/about" >About</NavLink>
                                    <Link smooth to={{ pathname: "/", hash: "testimonials" }}> Testimonials</Link>
                                    <Link smooth to={{ pathname: "/", hash: "faq" }}> Faq</Link>
                                    <NavLink to="/contact" >Contact</NavLink>
                                </HStack>
                                <HStack ml={3}>
                                    <NavLink to='auth/sign-in'>
                                        <Button colorScheme='red' bg={'#ca0000'} borderRadius={'4'} >Sign in</Button>
                                    </NavLink>
                                </HStack>
                            </Flex>
                        </>
                    ) : (
                        <>
                            <Flex alignItems="start" wrap="wrap" w='100%'>
                                <Flex flexGrow={1} justify="center" /*border='1px'*/>
                                    {/* <Heading ml={[4, 0]}>Zensurance</Heading> */}
                                    <Box ml={[4, 8]}>
                                        <Image
                                            src='./assets/images/other/logo.png'
                                            alt=''
                                            w={'280px'}
                                            h={'autopx'}
                                        />
                                    </Box>
                                </Flex>
                            </Flex>
                            <Flex justifyContent='end' spacing={2} w='100%'>
                                <IconButton
                                    variant="ghost"
                                    icon={<FiMenu fontSize="1.25rem" onClick={isOpen ? onClose : onOpen} />}
                                    aria-label="Open Menu"
                                />
                                <NavLink to='auth/sign-in'>
                                    <Button colorScheme='red'>Sign in</Button>
                                </NavLink>
                            </Flex>
                        </>
                    )}
                </HStack>

                {!isDesktop && isOpen ? (

                    <Stack py={2} fontSize='20' mr={5} fontWeight={500} direction="column" className='mobileNav'>
                        <NavLink to="/" >Home</NavLink>
                        <NavLink to="/about" >About</NavLink>
                        <Link smooth to={{ pathname: "/", hash: "testimonials" }}> Testimonials</Link>
                        <Link smooth to={{ pathname: "/", hash: "faq" }}> Faq</Link>
                        <NavLink to="/contact" >Contact</NavLink>
                    </Stack>
                )
                    :
                    ''
                }
            </Box>

        </Flex>
    )
}
