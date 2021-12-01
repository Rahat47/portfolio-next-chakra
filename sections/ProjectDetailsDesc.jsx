import {
    Container,
    SimpleGrid,
    Stack,
    Heading,
    VStack,
    Tag,
    Text,
    Box,
    Flex,
} from '@chakra-ui/react';
import { ProfileCard, SimpleHeading, SingleFact } from '../components';

const ProjectDetailDesc = () => {
    return (
        <Container maxW='8xl' as='section' py={20}>
            <SimpleGrid columns={[1, 1, 2]} spacing={10}>
                <Flex align='center' justify='space-evenly' direction='column'>
                    <Stack spacing={10}>
                        <SimpleHeading title='Quick Facts' />
                        <Stack spacing={4}>
                            <SingleFact
                                title='Created At'
                                content={new Date().toLocaleDateString()}
                            />
                            <SingleFact
                                title='Project Type'
                                content='Freelance'
                            />
                            <SingleFact title='Duration' content='7 Days' />
                            <SingleFact title='Language' content='JavaScript' />
                            <SingleFact title='Category' content='Frontend' />
                        </Stack>
                    </Stack>

                    <Stack spacing={10}>
                        <SimpleHeading title='Tools Used' />
                        <SimpleGrid columns={[2, 3]} gap={5}>
                            <Tag colorScheme='yellow'>JavaScript</Tag>
                            <Tag colorScheme='teal'>TypeScript</Tag>
                            <Tag colorScheme='blue'>React</Tag>
                            <Tag colorScheme='green'>Node</Tag>
                            <Tag colorScheme='green'>MongoDB</Tag>
                            <Tag colorScheme='black'>Next.js</Tag>
                            <Tag colorScheme='pink'>GraphQL</Tag>
                        </SimpleGrid>
                    </Stack>
                </Flex>
                <Stack spacing={20}>
                    <Stack spacing={4}>
                        <SimpleHeading title='About The Project' />
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusantium, expedita quibusdam et
                            reprehenderit in quidem! Mollitia temporibus
                            consectetur sed aliquam soluta? Deleniti animi hic
                            nesciunt mollitia tempore dolorem quas illo. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Officiis, porro voluptas qui dolor hic alias
                            obcaecati, cupiditate labore amet dignissimos
                            tempora? Eaque dicta veniam modi dolor sed quae,
                            neque ab? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Voluptatem,
                        </Text>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deserunt ullam ex libero. Possimus officia
                            quasi illo ducimus doloremque corrupti labore,
                            assumenda beatae, aspernatur maiores quam. Libero
                            maiores odio ipsam consectetur.
                        </Text>
                    </Stack>
                    <Box>
                        <SimpleHeading title='About The Client' />

                        <ProfileCard />
                    </Box>
                </Stack>
            </SimpleGrid>
        </Container>
    );
};

export default ProjectDetailDesc;
