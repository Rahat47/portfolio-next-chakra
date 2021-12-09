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

import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import moment from 'moment';

const HeroComponent = ({ user }) => {
    const totalRepos =
        parseInt(user.public_repos) + parseInt(user.total_private_repos);

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
                            src={user.avatar_url}
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
                            <Link href={user.html_url} isExternal>
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
                                    {moment(user.created_at).format(
                                        'MMMM do, YYYY'
                                    )}
                                </TagLabel>
                            </Tag>
                        </Stack>

                        <StatGroup mt={8}>
                            <Stat>
                                <StatNumber>{totalRepos}</StatNumber>
                                <StatLabel textTransform='uppercase'>
                                    Repositories
                                </StatLabel>
                            </Stat>
                            <Stat>
                                <StatNumber>{user.followers}</StatNumber>
                                <StatLabel textTransform='uppercase'>
                                    Followers
                                </StatLabel>
                            </Stat>

                            <Stat>
                                <StatNumber>{user.following}</StatNumber>
                                <StatLabel textTransform='uppercase'>
                                    Following
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
