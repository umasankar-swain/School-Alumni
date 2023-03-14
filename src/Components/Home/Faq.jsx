import {
    Box,
    Text,
    Link,
    Center,
    Divider,
    Container,
    Accordion,
    AccordionItem,
    AccordionIcon,
    AccordionPanel,
    AccordionButton,
} from '@chakra-ui/react';
import React, { useEffect } from "react";
import AOS from 'aos';

function Faq() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <Container maxW="container.xl" id='faq'>
            <Box mt={10} data-aos="fade-up">
                <Center fontSize='4xl' fontWeight='semibold' >FREQUENTLY ASKED QUESTIONS</Center>
                <Center><Divider borderRadius='10px' w='10%' border='2px' borderColor="red.500" mb={10} /></Center>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box fontSize='20px' flex='1' textAlign='left'>
                                    How do I join the Association?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text fontSize='20px' fontWeight='bold'>There are two ways of joining the association:</Text>
                            <ol>
                                <li>
                                    <Text fontSize='20px' style={{ overflow: 'hidden' }}>
                                        You can find the contact information on our ‘Contact Us’ page, you can also use the use the query form on the page to leave us a query
                                        <Link href="https://www.stpaulspalampur.com/contact-us"> https://www.stpaulspalampur.com/contact-us </Link>
                                    </Text>
                                </li>
                                <li>
                                    <Text fontSize='20px' style={{ overflow: 'hidden' }}>
                                        You can use our Alumni Portal to directly register with us <Link href="http://alumni.stpaulspalampur.com/register"> http://alumni.stpaulspalampur.com/register </Link>
                                        Please note that your registration will be subject to approval from the admin.
                                    </Text>
                                </li>
                            </ol>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box fontSize='20px' flex='1' textAlign='left'>
                                    How can I be a part of the core
                                    team?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text fontSize='20px'>
                                The core team consists of members that manage and organise activities of the association. The core team
                                can be joined through interview selection. E-mail joining request <Link
                                    href="mailto:stpaulsschool.palampur@gmail.com">stpaulsschool.palampur@gmail.com</Link>
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Container>
    )
}

export default Faq
