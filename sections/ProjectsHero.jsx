import Image from 'next/image';
import {
    Box,
    useColorModeValue,
    Button,
    Stack,
    chakra,
    Text,
    Heading,
} from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { BsStars } from 'react-icons/bs';
import { MdReadMore } from 'react-icons/md';

// import projectImg from '../assets/images/RahatGithub.png';

// const CHImage = chakra(Image);

const ProjectsHero = () => {
    return (
        <Box px={8} py={24} mx='auto' as='section'>
            <Box
                w={{ base: 'full', md: 11 / 12, xl: 9 / 12 }}
                mx='auto'
                textAlign={'center'}
            >
                <Heading
                    mb={6}
                    fontSize={{ base: '4xl', md: '6xl' }}
                    fontWeight='bold'
                    lineHeight='none'
                    letterSpacing={{ base: 'normal', md: 'tight' }}
                    color={useColorModeValue('gray.900', 'gray.100')}
                    fontFamily='Poppins'
                >
                    All of my{' '}
                    <Text
                        display={{ base: 'block', lg: 'inline' }}
                        w='full'
                        bgClip='text'
                        bgGradient='linear(to-r, blue.400, red.500)'
                        fontWeight='extrabold'
                    >
                        Previous Projects
                    </Text>{' '}
                    in one single place.
                </Heading>
                <Text
                    px={{ base: 0, lg: 24 }}
                    mb={6}
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color={useColorModeValue('gray.600', 'gray.300')}
                >
                    Great projects are built with love of the developers. Here
                    you can find all of my previous projects, and the
                    technologies that I used to build them. Also my current work
                    in progress.
                </Text>
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    mb={{ base: 4, md: 8 }}
                    spacing={2}
                    justifyContent={{ sm: 'left', md: 'center' }}
                >
                    <Button
                        as={ScrollLink}
                        to='featured-works'
                        variant='solid'
                        smooth
                        colorScheme={useColorModeValue('gray', 'blue')}
                        display='inline-flex'
                        alignItems='center'
                        justifyContent='center'
                        w={{ base: 'full', sm: 'auto' }}
                        mb={{ base: 2, sm: 0 }}
                        size='lg'
                        cursor='pointer'
                        rightIcon={<BsStars />}
                    >
                        Featured Works
                    </Button>
                    <Button
                        as={ScrollLink}
                        to='more-works'
                        smooth
                        colorScheme='gray'
                        display='inline-flex'
                        alignItems='center'
                        justifyContent='center'
                        w={{ base: 'full', sm: 'auto' }}
                        mb={{ base: 2, sm: 0 }}
                        size='lg'
                        cursor='pointer'
                        rightIcon={<MdReadMore />}
                    >
                        More Works
                    </Button>
                </Stack>
            </Box>
            {/* <Box
                w={{ base: 'full', md: 10 / 12 }}
                mx='auto'
                mt={20}
                textAlign='center'
            >
                <CHImage
                    w='full'
                    rounded='lg'
                    shadow='2xl'
                    blurDataURL={projectImg}
                    placeholder='blur'
                    src={projectImg}
                    alt='Rahat github profile Screen Shot'
                />
            </Box> */}
        </Box>
    );
};

export default ProjectsHero;
