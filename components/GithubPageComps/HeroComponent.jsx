import { useEffect, useState, useCallback } from 'react';
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
    Button,
    useDisclosure,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    ModalHeader,
    Input,
} from '@chakra-ui/react';
import CountUp from 'react-countup';

import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import moment from 'moment';
import { getLinesOfCode, getUser } from '../../services/githubGQL';

const HeroComponent = props => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [user, setUser] = useState(props.user);
    const [linesOfCode, setLinesOfCode] = useState(props.linesOfCode);

    const getUserDetails = useCallback(async () => {
        const userDetails = await getUser(props.username);

        setUser(userDetails);
    }, [props.username]);

    const getLinesOfCodeA = useCallback(async () => {
        const { totalLinesOfcode } = await getLinesOfCode(props.username);
        setLinesOfCode(totalLinesOfcode);
    }, [props.username]);

    useEffect(() => {
        getUserDetails();
        getLinesOfCodeA();
    }, [getUserDetails, getLinesOfCodeA]);

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
                                        end={user?.repositories?.totalCount}
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
                                        end={user?.followers?.totalCount}
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
                                        end={user?.following?.totalCount}
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
                                            user?.contributionsCollection
                                                ?.totalCommitContributions
                                        }
                                        duration={2}
                                        delay={1}
                                    />
                                </StatNumber>
                                <StatLabel textTransform='uppercase'>
                                    Commits
                                </StatLabel>
                            </Stat>
                            <Stat>
                                <StatNumber>
                                    <CountUp
                                        start={0}
                                        end={linesOfCode}
                                        duration={2}
                                        delay={1}
                                    />
                                </StatNumber>
                                <StatLabel textTransform='uppercase'>
                                    Lines Of Code
                                </StatLabel>
                            </Stat>
                        </StatGroup>

                        <Button variant={'ghost'} my={6} onClick={onOpen}>
                            Find Your Github Profile
                        </Button>

                        <Modal
                            isOpen={isOpen}
                            onClose={onClose}
                            size='xl'
                            isCentered
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>
                                    <Heading>Find Your Github Profile</Heading>
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Text>
                                        Enter your github username and the app
                                        will find your profile details.
                                    </Text>
                                    <form
                                        onSubmit={e => {
                                            e.preventDefault();
                                            props.setUsername(
                                                e.target.username.value
                                            );
                                            onClose();
                                        }}
                                    >
                                        <Input
                                            name='username'
                                            placeholder='Github Username'
                                            mt={4}
                                            id='username'
                                        />
                                        <Button
                                            mt={4}
                                            colorScheme='blue'
                                            type='submit'
                                            variant='ghost'
                                        >
                                            Find Profile
                                        </Button>
                                    </form>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </Box>

                    {/* An input to put username */}
                </Center>
            </Container>
        </chakra.section>
    );
};

export default HeroComponent;
