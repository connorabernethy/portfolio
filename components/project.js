import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'

const Project = ( {children} ) => {
    return (
        <Flex alignItems='center'>
        <Box w='100px'>
            <ArrowRightIcon />
        </Box>
    <Box w='800px'
    p='3rem' 
    borderWidth='3px' 
    borderRadius='lg'>
        {children}
    </Box>
    </Flex>
    )
}

export default Project