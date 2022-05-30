import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} marginTop={10} align="center">
                Hi, I&apos;m a full-stack developer from Arizona!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Connor Abernethy
                    </Heading>
                    <p>Developer, Creator, and Digital Connoisseur</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page