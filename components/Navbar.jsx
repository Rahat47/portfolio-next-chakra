import { useEffect, useRef, useState } from 'react';
import {
    chakra,
    HStack,
    Flex,
    IconButton,
    useColorModeValue,
    useDisclosure,
    CloseButton,
    VStack,
    Button,
    useColorMode,
    Fade,
} from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { navLinks } from '../assets/data/navlinks';
import { FcDocument } from 'react-icons/fc';
import Link from 'next/link';
import { SiRakuten } from 'react-icons/si';

export default function Navbar() {
    const { toggleColorMode: toggleMode } = useColorMode();
    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const bg = useColorModeValue('white', 'gray.800');
    const ref = useRef();
    const [y, setY] = useState(0);
    const { height = 0 } = ref.current
        ? ref.current.getBoundingClientRect()
        : {};

    const { scrollY } = useViewportScroll();
    useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()));
    }, [scrollY]);
    const cl = useColorModeValue('gray.800', 'white');
    const mobileNav = useDisclosure();

    const downloadResume = () => {
        const resumeLink = '/resume.pdf';
        window.open(resumeLink, '_blank');
    };

    const MobileNavContent = (
        <Fade in={mobileNav.isOpen}>
            <VStack
                zIndex={1000}
                pos='absolute'
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection='column'
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded='sm'
                shadow='sm'
            >
                <CloseButton
                    aria-label='Close menu'
                    justifySelf='self-start'
                    onClick={mobileNav.onClose}
                />
                {navLinks.map(item => (
                    <Button
                        w='full'
                        variant='ghost'
                        leftIcon={item.Icon}
                        key={item.id}
                        onClick={mobileNav.onClose}
                    >
                        <Link
                            fontFamily="'Open Sans', sans-serif"
                            href={item.url}
                        >
                            {item.name}
                        </Link>
                    </Button>
                ))}
                <Button
                    w='full'
                    onClick={downloadResume}
                    color={text}
                    leftIcon={<FcDocument />}
                >
                    Resume
                </Button>
            </VStack>
        </Fade>
    );
    return (
        <chakra.header
            ref={ref}
            shadow={y > height ? 'sm' : undefined}
            transition='box-shadow 0.2s'
            bg={bg}
            borderTop='6px solid'
            borderTopColor='brand.400'
            w='full'
            overflowY='hidden'
            borderBottomWidth={2}
            borderBottomColor={useColorModeValue('gray.200', 'gray.900')}
        >
            <chakra.div h='4.5rem' mx='auto'>
                <Flex
                    w='full'
                    h='full'
                    px='6'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Flex align='flex-start'>
                        <Link href='/' passHref>
                            <HStack>
                                <Link href='/'>
                                    <a>
                                        <SiRakuten size='2rem' />
                                    </a>
                                </Link>
                            </HStack>
                        </Link>
                    </Flex>
                    <Flex justify='flex-end' align='center' color='gray.400'>
                        <HStack
                            spacing='5'
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {navLinks.map(item => (
                                <Button
                                    key={item.id}
                                    bg={bg}
                                    color='gray.500'
                                    display='inline-flex'
                                    alignItems='center'
                                    fontSize='md'
                                    _hover={{ color: cl }}
                                    _focus={{ boxShadow: 'none' }}
                                >
                                    <Link href={item.url}>{item.name}</Link>
                                </Button>
                            ))}
                            <Button
                                display='inline-flex'
                                alignItems='center'
                                fontSize='md'
                                _focus={{ boxShadow: 'none' }}
                                onClick={downloadResume}
                                colorScheme={useColorModeValue(
                                    'blue',
                                    'orange'
                                )}
                            >
                                Resume
                            </Button>
                        </HStack>
                        <IconButton
                            size='md'
                            fontSize='lg'
                            aria-label={`Switch to ${text} mode`}
                            variant='ghost'
                            color='current'
                            ml={{ base: '0', md: '3' }}
                            onClick={toggleMode}
                            icon={<SwitchIcon />}
                        />
                        <IconButton
                            display={{ base: 'flex', md: 'none' }}
                            aria-label='Open menu'
                            fontSize='20px'
                            color={useColorModeValue('gray.800', 'inherit')}
                            variant='ghost'
                            icon={<AiOutlineMenu />}
                            onClick={mobileNav.onOpen}
                        />
                    </Flex>
                </Flex>
                {MobileNavContent}
            </chakra.div>
        </chakra.header>
    );
}
