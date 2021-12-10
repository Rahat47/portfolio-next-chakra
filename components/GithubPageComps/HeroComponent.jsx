import {
    chakra,
    Container,
    Center,
    Box,
    Avatar,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Tag,
    TagLeftIcon,
    TagLabel,
    Stat,
    StatLabel,
    StatNumber,
    StatGroup,
    Link,
} from '@chakra-ui/react';
import CountUp from 'react-countup';

import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import moment from 'moment';

const HeroComponent = ({ user }) => {
    return (
        <chakra.section bg='gray.800'>
            <Container maxW='7xl'>
                <Center py={6}>
                    <Box
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        p={6}
                        textAlign={'center'}
                    >
                        <Avatar
                            boxSize='200px'
                            src={user.avatarUrl}
                            alt={user.name}
                            mb={4}
                            pos={'relative'}
                            outline='3px solid'
                            outlineColor={useColorModeValue(
                                'green.200',
                                'green.500'
                            )}
                        />
                        <Heading fontSize={'5xl'} fontFamily={'Poppins'}>
                            {user.name}
                        </Heading>

                        <Text
                            fontSize='xl'
                            fontWeight={600}
                            color={'blue.400'}
                            mb={4}
                            fontFamily='Caveat'
                        >
                            <Link href={user.url} isExternal>
                                @{user.login}
                            </Link>
                        </Text>
                        <Text mb={4} fontSize='sm' color='gray'>
                            {user.bio}
                        </Text>
                        <Stack
                            align={'center'}
                            justify={'center'}
                            direction={'row'}
                            mt={6}
                            spacing={5}
                        >
                            {user.company && (
                                <Tag colorScheme='green' size='lg'>
                                    <TagLeftIcon as={FaRegUser} />
                                    <TagLabel>{user.company}</TagLabel>
                                </Tag>
                            )}

                            {user.location && (
                                <Tag colorScheme='yellow' size='lg'>
                                    <TagLeftIcon as={IoLocationOutline} />
                                    <TagLabel>{user.location}</TagLabel>
                                </Tag>
                            )}

                            <Tag colorScheme='purple' size='lg'>
                                <TagLeftIcon as={FaRegCalendarAlt} />
                                <TagLabel>
                                    Joined{' '}
                                    {moment(user.createdAt).format(
                                        'MMMM do, YYYY'
                                    )}
                                </TagLabel>
                            </Tag>
                        </Stack>

                        <StatGroup mt={8}>
                            <Stat>
                                <StatNumber>
                                    <CountUp
                                        start={0}
                                        end={user.repositories.totalCount}
                                        duration={2}
                                        delay={1}
                                    />
                                </StatNumber>
                                <StatLabel textTransform='uppercase'>
                                    Repositories
                                </StatLabel>
                            </Stat>
                            <Stat>
                                <StatNumber>
                                    <CountUp
                                        start={0}
                                        end={user.followers.totalCount}
                                        duration={1}
                                        delay={1}
                                    />
                                </StatNumber>
                                <StatLabel textTransform='uppercase'>
                                    Followers
                                </StatLabel>
                            </Stat>

                            <Stat>
                                <StatNumber>
                                    <CountUp
                                        start={0}
                                        end={user.following.totalCount}
                                        duration={1}
                                        delay={1}
                                    />
                                </StatNumber>
                                <StatLabel textTransform='uppercase'>
                                    Following
                                </StatLabel>
                            </Stat>
                            <Stat>
                                <StatNumber>
                                    <CountUp
                                        start={0}
                                        end={
                                            user.contributionsCollection
                                                .totalCommitContributions
                                        }
                                        duration={2}
                                        delay={1}
                                    />
                                </StatNumber>
                                <StatLabel textTransform='uppercase'>
                                    Commits
                                </StatLabel>
                            </Stat>
                        </StatGroup>
                    </Box>
                </Center>
            </Container>
        </chakra.section>
    );
};

export default HeroComponent;
