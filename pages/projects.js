import { Flex, Container, Box, Circle, VStack, StackDivider } from "@chakra-ui/react"
import { ArrowRightIcon } from "@chakra-ui/icons"
import GridBox from "../components/gridbox"
import Project from "../components/project"

const Projects = () => {
    return (
    <Box mt='3rem'>
        <VStack divider={<StackDivider />} spacing={4} align='stretch'>
            <Project>Testing</Project>
            <Project>Test2</Project>
            <Project>Test3</Project>
            <Project>Test4</Project>
            <Project>Test5</Project>
            <Project>Test6</Project>
        </VStack>
    </Box>
    )
}

export default Projects