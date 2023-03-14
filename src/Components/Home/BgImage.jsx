import React from 'react'
import { Box, } from "@chakra-ui/react";
function BgImage() {
    return (
        <Box
            id='top'
            pos="relative"
            h="90vh"
            backgroundImage="url('./assets/images/other/banner.jpg')"
            backgroundAttachment={'fixed'}
            bgRepeat="no-repeat"
            width='100%'
            backgroundSize='cover'
        >
        </Box>
    )
}

export default BgImage