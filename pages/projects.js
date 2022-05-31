import { SimpleGrid } from "@chakra-ui/react"
import GridBox from "../components/gridbox"

const Projects = () => {
    return (
        <SimpleGrid spacing={5}>
            <GridBox />
            <GridBox />
            <GridBox />
            <GridBox />
        </SimpleGrid>
    )
}

export default Projects