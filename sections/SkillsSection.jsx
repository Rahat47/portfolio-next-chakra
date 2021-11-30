import React from 'react';
import {
    Box,
    chakra,
    Flex,
    Heading,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react';
import { MdOutlineDesignServices } from 'react-icons/md';
import { VscServerProcess } from 'react-icons/vsc';
import { backendSkills, frontendSkills } from '../assets/data/skills';
import { Tech } from '../components';
import { AiFillExclamationCircle } from 'react-icons/ai';

export default function SkillsSection() {
    return (
        <Flex
            w='full'
            bg={useColorModeValue('#F9FAFB', 'gray.600')}
            p={50}
            alignItems='center'
            justifyContent='center'
            direction='column'
        >
            <Heading
                as='h1'
                fontSize='5xl'
                fontWeight='bold'
                color={useColorModeValue('black', 'white')}
                fontFamily='Poppins'
                mb='20'
                bgGradient='linear(to-r, green.400, blue.500)'
                bgClip='text'
            >
                Tools I Use
            </Heading>

            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                }}
                gap='24px'
                mx='auto'
                textAlign={['left', , 'center']}
            >
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    px={4}
                    py={12}
                    shadow='base'
                    rounded='md'
                    direction='column'
                    justifyItems='center'
                    alignItems='center'
                >
                    <chakra.p
                        mb={1}
                        fontSize='xs'
                        fontWeight='bold'
                        letterSpacing='wide'
                        textTransform='uppercase'
                        color={useColorModeValue('gray.500', 'gray.400')}
                    >
                        For Front-End
                    </chakra.p>
                    <Text
                        mb={2}
                        fontSize='5xl'
                        fontWeight={['bold', 'extrabold']}
                        color={useColorModeValue('gray.900', 'gray.50')}
                        lineHeight='tight'
                        w='full'
                        textAlign='center'
                        _after={{
                            content: '""',
                            display: 'block',
                            width: '100%',
                            height: '1px',
                            background: useColorModeValue('gray.500', 'white'),
                            margin: '0 auto',
                            marginBottom: '1rem',
                        }}
                    >
                        <Icon as={MdOutlineDesignServices} />
                    </Text>
                    <Stack
                        mt={4}
                        spacing={5}
                        px={{
                            base: 4,
                            md: 10,
                        }}
                    >
                        {frontendSkills.map(skill => (
                            <Tech key={skill.key} skill={skill} />
                        ))}
                    </Stack>
                </Flex>

                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    px={4}
                    py={12}
                    shadow='base'
                    rounded='md'
                    direction='column'
                    justifyItems='center'
                    alignItems='center'
                >
                    <chakra.p
                        mb={1}
                        fontSize='xs'
                        fontWeight='bold'
                        letterSpacing='wide'
                        textTransform='uppercase'
                        color={useColorModeValue('gray.500', 'gray.400')}
                    >
                        For Back-End
                    </chakra.p>
                    <Text
                        mb={2}
                        fontSize='5xl'
                        fontWeight={['bold', 'extrabold']}
                        color={useColorModeValue('gray.900', 'gray.50')}
                        lineHeight='tight'
                        w='full'
                        textAlign='center'
                        _after={{
                            content: '""',
                            display: 'block',
                            width: '100%',
                            height: '1px',
                            background: useColorModeValue('gray.500', 'white'),
                            margin: '0 auto',
                            marginBottom: '1rem',
                        }}
                    >
                        <Icon as={VscServerProcess} />
                    </Text>
                    <hr />
                    <Stack
                        mt={4}
                        spacing={5}
                        px={{
                            base: 4,
                            md: 10,
                        }}
                    >
                        {backendSkills.map(skill => (
                            <Tech key={skill.key} skill={skill} />
                        ))}
                    </Stack>
                </Flex>
            </SimpleGrid>
        </Flex>
    );
}
