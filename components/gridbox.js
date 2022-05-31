import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react"

const GridBox = () => {
    return (
        <Box borderRadius="lg" bg={useColorModeValue('whitesmoke', 'whiteAlpha.200')} p={5}
        padding="128px"
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;"
        transition="0.3s"
        _hover={{ boxShadow: "rgba(149, 152, 165, 0.2) 0px 16px 48px;" }}>
        </Box>
    )
}

export default GridBox