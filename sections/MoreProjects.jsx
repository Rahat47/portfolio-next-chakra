import { Container, SimpleGrid } from '@chakra-ui/react';
import { HeadingBB, ProjectCardSm } from '../components';
const MoreProjects = () => {
    return (
        <Container maxW='7xl' as='section' py={10}>
            <HeadingBB text='More' coloredText='Projects' />

            <SimpleGrid columns={[1, 1, 2, 3]} spacing={5}>
                <ProjectCardSm />
                <ProjectCardSm />
                <ProjectCardSm />
                <ProjectCardSm />
                <ProjectCardSm />
                <ProjectCardSm />
            </SimpleGrid>
        </Container>
    );
};

export default MoreProjects;
