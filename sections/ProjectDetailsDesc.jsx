import {
    Container,
    SimpleGrid,
    Stack,
    Tag,
    Box,
    Flex,
    GridItem,
} from '@chakra-ui/react';
import moment from 'moment';
import { RichText } from '@graphcms/rich-text-react-renderer';
import {
    ClientReview,
    ProfileCard,
    SimpleHeading,
    SingleFact,
} from '../components';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { IoConstructOutline } from 'react-icons/io5';
import { GiDuration } from 'react-icons/gi';
import { BiCodeAlt, BiCategoryAlt } from 'react-icons/bi';

const ProjectDetailDesc = ({
    started,
    types,
    duration,
    language,
    category,
    skills,
    description,
    client,
    reviews,
}) => {
    return (
        <Container maxW='8xl' as='section' py={20}>
            <SimpleGrid columns={[1, 1, 2]} spacing={10}>
                <Flex align='center' justify='space-evenly' direction='column'>
                    <Stack spacing={10} w={['100%', '80%', '80%', '60%']}>
                        <SimpleHeading title='Quick Facts' />
                        <SimpleGrid columns={1} spacing={5}>
                            <SingleFact
                                icon={BsFillCalendarCheckFill}
                                title='Created At'
                                content={moment(started).format('MMM YYYY')}
                            />
                            <SingleFact
                                icon={IoConstructOutline}
                                title='Project Type'
                                content={types.join('/')}
                            />
                            <SingleFact
                                icon={GiDuration}
                                title='Duration'
                                content={`${duration} ${
                                    duration > 1 ? 'days' : 'day'
                                }`}
                            />
                            <SingleFact
                                title='Language'
                                content={language}
                                icon={BiCodeAlt}
                            />
                            <SingleFact
                                title='Category'
                                content={category}
                                icon={BiCategoryAlt}
                            />
                        </SimpleGrid>
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
                <GridItem colSpan={[1, 1, 2]}>
                    {reviews.length > 0 &&
                        reviews.map(review => (
                            <ClientReview
                                key={review.id}
                                review={review}
                                client={client}
                            />
                        ))}
                </GridItem>
            </SimpleGrid>
        </Container>
    );
};

export default ProjectDetailDesc;
