import React from 'react'
import NextLink from 'next/link'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'

const Project = ( {children, imgUrl} ) => {
    return (
    <Flex alignItems='center'>
        <Box w='100px'>
            <ArrowRightIcon />
        </Box>
        <NextLink href='https://www.pioneerco.com'>
            <Box w='800px'
            h='100px'
            borderWidth='3px' 
            borderRadius='lg'
            overflow='hidden'
            display='flex'
            boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px;'
            transition='0.5s'
            _hover={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 10px;'}}>
                <Flex alignItems='center'>
                    <Image src={imgUrl} maxW='200px' borderRadius='lg'/>
                    <Box bg='lightblue' opacity='0.8' h='100%' p={1}/>
                    <Text ml={5} textAlign='center' fontWeight='light'>{children}</Text>
                </Flex>
            </Box>
        </NextLink>
    </Flex>
    )
}

export default Project