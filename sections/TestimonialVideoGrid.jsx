import {
    Box,
    Grid,
    Heading,
    Text,
    Button,
    Center,
    SimpleGrid,
    Stack,
    useColorModeValue as mode,
    IconButton,
} from '@chakra-ui/react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { IoShapes } from 'react-icons/io5';
import { TestimonialSM } from '../components';

import Image from 'next/image';

import { useRouter } from 'next/router';
import { FaPlayCircle } from 'react-icons/fa';

const Feature = ({ title, children }) => {
    return (
        <Stack>
            <Text fontFamily='Roboto' fontWeight='bold'>
                {title}
            </Text>
            <Text>{children}</Text>
        </Stack>
    );
};

const TestimonialVideoGrid = () => {
    const router = useRouter();

    return (
        <Box as='section' py='24' bg={mode('gray.100', 'gray.800')}>
            <Box
                maxW={{
                    base: 'xl',
                    md: '7xl',
                }}
                mx='auto'
                px={{
                    base: '6',
                    md: '8',
                }}
            >
                <Grid
                    templateColumns={{
                        base: '1fr',
                        md: '360px 1fr',
                    }}
                    gap='64px'
                >
                    <Box>
                        <Heading
                            size='3xl'
                            letterSpacing='tight'
                            fontWeight='light'
                            textTransform={'capitalize'}
                            fontFamily='Poppins'
                        >
                            I build things for the web
                        </Heading>
                        <Text
                            mt='6'
                            mb='8'
                            fontSize='lg'
                            fontWeight='light'
                            fontFamily='Roboto'
                        >
                            Creating websites is hard. I’m a developer, so I try
                            to make it as easy as possible.
                        </Text>
                        <Button
                            size='lg'
                            colorScheme='blue'
                            minH='14'
                            rightIcon={<BiRightArrowAlt />}
                            onClick={() => router.push('/projects')}
                        >
                            See my work
                        </Button>
                        <TestimonialSM
                            logo={<IoShapes size='2rem' />}
                            author='Carlos Bedolla'
                            company='CEO, Cheer Music Maker'
                        >
                            &ldquo; I can’t say enough about this guy!
                            Professional and committed to his clients. He never
                            disappoints and really can make your ideas come to
                            life! Thank you for all that you do! &rdquo;
                        </TestimonialSM>
                    </Box>
                    <Box>
                        <Center
                            bg={mode('white', 'gray.700')}
                            shadow='lg'
                            minH={{
                                base: '320px',
                                lg: '480px',
                            }}
                            rounded='lg'
                            pos='relative'
                        >
                            {/* Replace this with your screenshot */}
                            <Image
                                src='https://media.graphcms.com/5FlnS5EZQ2msL4nsgs70'
                                alt="Screenshot one of the projects I've worked on"
                                width={1080}
                                height={720}
                                placeholder='blur'
                                blurDataURL='https://media.graphcms.com/5FlnS5EZQ2msL4nsgs70'
                                title="Screenshot one of the projects I've worked on"
                            />
                            <Box
                                pos='absolute'
                                top='0'
                                left='0'
                                right='0'
                                bottom='0'
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                bg='rgba(0,0,0,0.5)'
                            >
                                <IconButton
                                    icon={<FaPlayCircle size='4rem' />}
                                    variant='ghost'
                                    colorScheme='white'
                                    boxSize={20}
                                    onClick={() => {
                                        router.push('/projects');
                                    }}
                                />
                            </Box>
                        </Center>
                        <SimpleGrid
                            rounded='lg'
                            mt='10'
                            p={{
                                base: '10',
                                lg: '0',
                            }}
                            columns={{
                                base: 1,
                                lg: 3,
                            }}
                            spacing='6'
                            bg={{
                                base: mode('gray.200', 'gray.700'),
                                lg: 'unset',
                            }}
                        >
                            <Feature title='Next Gen Tools'>
                                I use the latest technologies to build the best
                                web apps. Making sure the code is clean,
                                readable and maintainable. also the app is
                                optimized, fast and responsive.
                            </Feature>
                            <Feature title='Great Client Support'>
                                I’m always available to help you with any issues
                                you might have. Also regular updates and bug
                                fixes. I’m always happy to help you.
                            </Feature>
                            <Feature title='Work with Teams'>
                                I’m always happy to work with teams. I’m always
                                a team player and I’m always ready to help.
                            </Feature>
                        </SimpleGrid>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
};

export default TestimonialVideoGrid;
