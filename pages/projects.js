import { Flex, Heading, Box, Circle, VStack, StackDivider } from "@chakra-ui/react"
import { ArrowRightIcon } from "@chakra-ui/icons"
import GridBox from "../components/gridbox"
import Project from "../components/project"

const Projects = () => {
    const imgPlaceholder = 'https://kotirouva.com/wp-content/uploads/woocommerce-placeholder.png'
    return (
    <Box mt='3rem'>
        <Heading mt='3rem' mb='3rem'>Projects</Heading>
        <VStack divider={<StackDivider />} spacing={4} align='stretch'>
            <Project imgUrl='https://pbs.twimg.com/profile_images/1146571899616530433/j9ps30tx_400x400.png'>
            Pioneer Sand - A Fullstack website created with Next.js, Typescript and React.</Project>
            <Project imgUrl={imgPlaceholder}>Test2</Project>
            <Project imgUrl={imgPlaceholder}>Test3</Project>
            <Project imgUrl={imgPlaceholder}>Test4</Project>
            <Project imgUrl={imgPlaceholder}>Test5</Project>
            <Project imgUrl={imgPlaceholder}>Test6</Project>
        </VStack>
    </Box>
    )
}

export default Projects