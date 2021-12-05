import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    Icon,
    Stack,
    Link,
    Text,
    Tag,
    Container,
    SimpleGrid,
} from '@chakra-ui/react';
import { FcBriefcase } from 'react-icons/fc';
import { SectionHeading } from '../components';
import moment from 'moment';

export default function Work({ works }) {
    const WorkDetails = props => {
        const start = moment(props.startDate).format('MMM YYYY');
        const end = props.endDate
            ? moment(props.endDate).format('MMM YYYY')
            : 'Present';

        const date = `${start} - ${end}`;

        return (
            <Flex
                flexDirection={{
                    base: 'column',
                    md: 'row',
                }}
                fontFamily='Roboto'
            >
                <Flex>
                    <Flex
                        alignItems='center'
                        justifyContent='center'
                        h={12}
                        w={12}
                        rounded='md'
                        bg={useColorModeValue('brand.500')}
                        color='white'
                    >
                        <Icon
                            boxSize={6}
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            aria-hidden='true'
                        >
                            {props.icon}
                        </Icon>
                    </Flex>
                </Flex>
                <Box ml={4}>
                    <Flex justify='space-between' mb={3}>
                        <chakra.dt
                            fontSize='lg'
                            fontWeight='medium'
                            lineHeight='6'
                        >
                            <Link
                                href={props.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                color='blue.400'
                            >
                                {props.title}
                            </Link>
                        </chakra.dt>

                        <Tag colorScheme='green' textTransform='capitalize'>
                            {props.types.join(' / ')}
                        </Tag>
                    </Flex>
                    <Text
                        fontSize='sm'
                        fontFamily='Open sans'
                        color={useColorModeValue('gray.500')}
                        lineHeight='150%'
                    >
                        {date}
                    </Text>
                    <chakra.dd
                        mt={2}
                        color={useColorModeValue('gray.500', 'gray.400')}
                        lineHeight='1.5'
                        fontFamily='Roboto'
                    >
                        {props.children}
                    </chakra.dd>

                    <Stack
                        mt={2}
                        isInline
                        wrap='wrap'
                        align='center'
                        spacing={4}
                    >
                        {props?.skills?.map(skill => (
                            <Tag
                                my={2}
                                key={skill}
                                variant='solid'
                                colorScheme={'orange'}
                                size='sm'
                            >
                                {skill}
                            </Tag>
                        ))}
                    </Stack>
                </Box>
            </Flex>
        );
    };
    return (
        <Container maxW='7xl' my={8} as='section'>
            <Flex justifyContent='center' alignItems='center'>
                <Box
                    py={12}
                    bg={useColorModeValue('white', 'gray.800')}
                    rounded='xl'
                >
                    <Box maxW='7xl' mx='auto' px={{ base: 4, lg: 8 }}>
                        <Box textAlign={{ lg: 'center' }}>
                            <SectionHeading title='Work Experience' />
                            <chakra.p
                                my={4}
                                fontSize={{ base: '3xl', sm: '4xl' }}
                                lineHeight='9'
                                fontWeight='bold'
                                letterSpacing='tight'
                                color={useColorModeValue('gray.900')}
                                fontFamily='Open sans'
                            >
                                I’ve worked at some start-up and Freelancer
                                Platforms
                            </chakra.p>
                        </Box>

                        <Box mt={10}>
                            <SimpleGrid
                                columns={{ base: 1, lg: 2 }}
                                spacing={4}
                                gridColumnGap={{ md: 8 }}
                                gridRowGap={{ md: 10 }}
                            >
                                {works.map(work => (
                                    <WorkDetails
                                        title={work.title}
                                        link={work.url}
                                        icon={<FcBriefcase size='1.5rem' />}
                                        key={work.id}
                                        startDate={work.joinedDate}
                                        endDate={work.leftDate}
                                        types={work.type}
                                        skills={work.skills}
                                    >
                                        {work.description}
                                    </WorkDetails>
                                ))}
                            </SimpleGrid>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}
