import React from 'react';
import {
    Box,
    Stack,
    Flex,
    useColorModeValue,
    Link,
    Text,
    chakra,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export default function CallToAction() {
    return (
        <Flex
            bg={useColorModeValue('gray.50', 'gray.600')}
            p={50}
            w='full'
            alignItems='center'
            justifyContent='center'
        >
            <Flex
                justify='center'
                bg={useColorModeValue('white', 'gray.800')}
                w='full'
            >
                <Box
                    w={{ base: 'full', md: '75%', lg: '50%' }}
                    px={4}
                    py={20}
                    textAlign={{ base: 'left', md: 'center' }}
                >
                    {/* <chakra.span
                        fontSize={{ base: '3xl', sm: '4xl' }}
                        fontWeight='bold'
                        letterSpacing='tight'
                        lineHeight='shorter'
                        color={useColorModeValue('gray.900', 'gray.100')}
                        fontFamily='Poppins'
                        mb={6}
                    >
                        <chakra.span display='block'>
                            Want to get your dream project done?
                        </chakra.span>
                        <chakra.span
                            display='block'
                            color={useColorModeValue('red.600', 'gray.500')}
                        >
                            Contact me today!
                        </chakra.span>
                    </chakra.span> */}
                    {/* <Stack
                        justifyContent={{ base: 'left', md: 'center' }}
                        direction={{ base: 'column', sm: 'row' }}
                        spacing={2}
                        mt={2}
                    >
                        <Box display='inline-flex' rounded='md' shadow='md'>
                            <Link
                                w='full'
                                display='inline-flex'
                                alignItems='center'
                                justifyContent='center'
                                px={5}
                                py={3}
                                border='solid transparent'
                                fontWeight='bold'
                                rounded='md'
                                color={useColorModeValue('black', 'white')}
                                bg={useColorModeValue(
                                    'green.600',
                                    'orange.500'
                                )}
                                _hover={{
                                    bg: useColorModeValue(
                                        'orange.700',
                                        'green.600'
                                    ),
                                }}
                            >
                                <a>Get Started</a>
                            </Link>
                        </Box>
                        <Box
                            ml={3}
                            display='inline-flex'
                            rounded='md'
                            shadow='md'
                        >
                            <Link
                                w='full'
                                display='inline-flex'
                                alignItems='center'
                                justifyContent='center'
                                px={5}
                                py={3}
                                border='solid transparent'
                                fontWeight='bold'
                                rounded='md'
                                color='brand.600'
                                bg='white'
                                _hover={{
                                    bg: 'brand.50',
                                }}
                            >
                                Learn more
                            </Link>
                        </Box>
                    </Stack> */}
                </Box>
            </Flex>
        </Flex>
    );
}
