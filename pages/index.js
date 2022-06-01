import React, { useState } from 'react'
import { Box, Container, Button, Input, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import GridBox from "../components/gridbox"

const Page = () => {
    const [count, setCount] = useState("")
    const handleClick = () => {
        setCount(count += "2")
    }
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} marginTop={10} align="center">
                Hi, I&apos;m a full-stack developer from Arizona!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Connor Abernethy {count}
                    </Heading>
                    <Input className="inputbox" pr="4.5rem"></Input>
                    <Button onClick={handleClick}>Testing</Button>
                    <p>Developer, Creator, and Digital Connoisseur</p>
                </Box>
            </Box>
            <SimpleGrid columns={2} spacing={5} mt="5rem">
                <GridBox></GridBox>
                <GridBox></GridBox>
                <GridBox></GridBox>
                <GridBox></GridBox>
            </SimpleGrid>
        </Container>
    )
}

export default Page