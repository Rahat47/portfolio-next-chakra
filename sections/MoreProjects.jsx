import { Container, SimpleGrid, Center, Button } from '@chakra-ui/react';
import { HeadingBB, ProjectCardSm } from '../components';
const MoreProjects = () => {
    return (
        <Container maxW='7xl' as='section' py={10} id='more-works'>
            <HeadingBB text='More' coloredText='Projects' />

            <SimpleGrid columns={[1, 1, 2, 3]} spacing={5}>
                <ProjectCardSm />
                <ProjectCardSm />
                <ProjectCardSm />
                <ProjectCardSm />
                <ProjectCardSm />
                <ProjectCardSm />
            </SimpleGrid>
            <Center>
                <Button variant='link'>Load More</Button>
            </Center>
        </Container>
    );
};

export default MoreProjects;
