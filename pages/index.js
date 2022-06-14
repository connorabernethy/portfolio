import React, { useState } from 'react'
import { Box, Container, Button, Input, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import NoSsr from '../components/no-ssr'
import Obj from '../components/3d'

const Page = () => {
    const [count, setCount] = useState("")
    const handleClick = () => {
        setCount(count += "2")
    }
    return (
        <Container maxW='container.lg'>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" mt={10} mb={10} size='4xl'>
                        Welcome {count}
                    </Heading>
                    <Heading as='h2' variant='section-title'>
                        Full Stack Developer & Creator
                    </Heading>
                </Box>
            </Box>
            <Container maxW='100%' mt='1rem' alignItems='center' alignSelf='center' alignContent='center' textAlign='center'>
                <NoSsr>
                    <Obj />
                </NoSsr>
            </Container>
        </Container>
    )
}

export default Page