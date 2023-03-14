import AOS from 'aos';
import {
    Box,
    Text,
    List,
    Stack,
    ListItem,
    ListIcon,
    Container,
} from '@chakra-ui/react';
import React, { useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

function Guidelines() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <Box mt={40} className='reunite'>
            <Container maxW="container.xl" data-aos="fade-up">
                <Box className='content'>
                    <Text fontSize={30} fontWeight='bold'>
                        CONSTITUTIONAL GUIDELINES
                    </Text>

                    <Stack spacing={6} direction={{base:'column', sm:'column',md:'row',lg:'row'}} fontSize='20' textAlign='left' mt={7}>
                        <Box w='100%'>
                            <List spacing={3}>
                                <ListItem mt={2}>
                                    <ListIcon as={FaRegCheckCircle} color='green.500' />
                                    The committee will function for two years and will be re-constituted thereafter.
                                </ListItem>
                                <ListItem mt={2}>
                                    <ListIcon as={FaRegCheckCircle} color='green.500' />
                                    The post of chief patron and patron are ex-officio and will go to the Bishop Diocese of Amritsar and Principal respectively.
                                </ListItem>
                                <ListItem mt={2}>
                                    <ListIcon as={FaRegCheckCircle} color='green.500' />
                                    The association will be constituted with consent of the members. The election for the posts will not be held.
                                </ListItem>
                                <ListItem mt={2}>
                                    <ListIcon as={FaRegCheckCircle} color='green.500' />
                                    The account will be maintained by the school and the statement of
                                    accounts will be laid before the association at the next meeting.
                                </ListItem>
                                <ListItem mt={2}>
                                    <ListIcon as={FaRegCheckCircle} color='green.500' />
                                    The patron will have the right to veto any decision in the
                                    interest of the association
                                    and the school.
                                </ListItem>
                                <ListItem mt={2}>
                                    <ListIcon as={FaRegCheckCircle} color='green.500' />
                                    The decision of the patron will be binding on all members.
                                </ListItem>
                            </List>
                        </Box>
                        <Box w='100%'>
                            <List spacing={3}>
                                <ListItem mt={2}>
                                    <ListIcon as={FaRegCheckCircle} color='green.500' />
                                    The address of the association will be
                                    The Alumni Association
                                    St. Paul&#39;s Sr. Sec. School, Palampur- 176061 Dist. Kangra (H.P)
                                </ListItem>
                                <ListItem mt={2}>
                                    <ListIcon as={FaRegCheckCircle} color='green.500' />
                                    The members will be on the mailing list of the school for all
                                    school functions and souvenir / magazines published by the school.
                                </ListItem>
                                <ListItem mt={2}>
                                    <ListIcon as={FaRegCheckCircle} color='green.500' />
                                    The membership fee will be in three categories subject to
                                    approval of the association at its next meeting:
                                </ListItem>
                                <ListItem mt={2}>
                                    <ListIcon as={FaRegCheckCircle} color='green.500' />
                                    The membership fee may be revised by the association if the
                                    need is felt.
                                </ListItem>
                                <ListItem mt={2}>
                                    <ListIcon as={FaRegCheckCircle} color='green.500' />
                                    All the meetings will be chaired by the Chief Patron and in
                                    his absence by the Patron.
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Guidelines
