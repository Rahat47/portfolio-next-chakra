import {
    useBreakpointValue,
    useColorModeValue,
    Box,
    Flex,
    Heading,
    Button,
    Stack,
    Container,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';

const ProjectDetailsHero = () => {
    return (
        <Container as='section' maxW='8xl'>
            <Box
                w='full'
                position='relative'
                h='container.sm'
                backgroundImage='url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)'
                bgPos='center'
                bgSize='cover'
                //clip-path: polygon(0 0, 100% 0, 100% calc(100% - 9vh), 0 100%);
                clipPath={useBreakpointValue({
                    base: 'polygon(0 0, 100% 0, 100% calc(100% - var(--section-rotate) + 2vh), 0 100%)',
                    md: 'polygon(0 0, 100% 0, 100% calc(100% - var(--section-rotate)), 0 100%)',
                })}
                _after={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.5,
                    zIndex: -1,
                    bgGradient: 'linear(to-br, gray.700, blue.200)',
                }}
            >
                <Flex
                    align='center'
                    pos='relative'
                    justify='center'
                    boxSize='full'
                    bg='blackAlpha.700'
                >
                    <Stack textAlign='center' alignItems='center' spacing={6}>
                        <Heading
                            fontSize={['2xl', , '5xl']}
                            fontWeight='semibold'
                            textTransform='uppercase'
                            bgClip='text'
                            bgGradient='linear(to-r, orange.200, cyan.600)'
                        >
                            Super Cool Project Name
                        </Heading>
                        <Stack
                            direction={{
                                base: 'column',
                                md: 'row',
                            }}
                        >
                            <Button
                                colorScheme='gray'
                                textTransform='uppercase'
                                w='fit-content'
                                fontSize='sm'
                                rightIcon={<FaGithub />}
                                variant={useColorModeValue('solid', 'ghost')}
                            >
                                View Source
                            </Button>
                            <Button
                                colorScheme={useColorModeValue('cyan', 'green')}
                                textTransform='uppercase'
                                w='fit-content'
                                fontSize='sm'
                                rightIcon={<GoLinkExternal />}
                                variant={useColorModeValue('solid', 'ghost')}
                            >
                                View Demo
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>
            </Box>
        </Container>
    );
};

export default ProjectDetailsHero;
