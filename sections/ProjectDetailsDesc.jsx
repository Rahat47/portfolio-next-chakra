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
import moment from 'moment';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { ProfileCard, SimpleHeading, SingleFact } from '../components';

const ProjectDetailDesc = ({
    started,
    types,
    duration,
    language,
    category,
    skills,
    description,
    client,
}) => {
    return (
        <Container maxW='8xl' as='section' py={20}>
            <SimpleGrid columns={[1, 1, 2]} spacing={10}>
                <Flex align='center' justify='space-evenly' direction='column'>
                    <Stack spacing={10}>
                        <SimpleHeading title='Quick Facts' />
                        <Stack spacing={4}>
                            <SingleFact
                                title='Created At'
                                content={moment(started).format('MMM YYYY')}
                            />
                            <SingleFact
                                title='Project Type'
                                content={types.join('/')}
                            />
                            <SingleFact
                                title='Duration'
                                content={`${duration} ${
                                    duration > 1 ? 'days' : 'day'
                                }`}
                            />
                            <SingleFact title='Language' content={language} />
                            <SingleFact title='Category' content={category} />
                        </Stack>
                    </Stack>

                    <Stack spacing={10}>
                        <SimpleHeading title='Tools Used' />
                        <SimpleGrid columns={[2, 3]} gap={5}>
                            {skills.map(skill => (
                                <Tag
                                    key={skill}
                                    variant='solid'
                                    colorScheme='blue'
                                >
                                    {skill}
                                </Tag>
                            ))}
                        </SimpleGrid>
                    </Stack>
                </Flex>
                <Stack spacing={20}>
                    <Stack spacing={5}>
                        <SimpleHeading title='About The Project' />
                        <RichText content={description.raw.children} />
                    </Stack>
                    <Box>
                        <SimpleHeading title='About The Client' />

                        <ProfileCard client={client} />
                    </Box>
                </Stack>
            </SimpleGrid>
        </Container>
    );
};

export default ProjectDetailDesc;
