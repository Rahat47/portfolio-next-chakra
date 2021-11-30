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
                columns={[1, , 2]}
                gap='24px'
                mx='auto'
                textAlign={['left', , 'center']}
            >
                <Box
                    bg={useColorModeValue('white', 'gray.800')}
                    px={4}
                    py={12}
                    shadow='base'
                    rounded='md'
                    minW='md'
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
                    >
                        <Icon as={MdOutlineDesignServices} />
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
                        {frontendSkills.map(skill => (
                            <Tech key={skill.key} skill={skill} />
                        ))}
                    </Stack>
                </Box>

                <Box
                    bg={useColorModeValue('white', 'gray.800')}
                    px={4}
                    py={12}
                    shadow='base'
                    rounded='md'
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
                </Box>
            </SimpleGrid>
        </Flex>
    );
}
