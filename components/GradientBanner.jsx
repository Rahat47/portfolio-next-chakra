import { Box, HStack, Link, Stack, Text } from '@chakra-ui/react';

const GradientBanner = ({ text }) => {
    return (
        <Box as='section' pt='8' pb='12'>
            <Box
                bgGradient='linear(to-r, gray.500, blue.500)'
                color='white'
                py='3'
                px={{
                    base: '3',
                    md: '6',
                    lg: '8',
                }}
            >
                <HStack spacing='3'>
                    <Stack
                        direction={{
                            base: 'column',
                            sm: 'row',
                        }}
                        justifyContent='center'
                        alignItems='center'
                        spacing={{
                            base: '3',
                            md: '6',
                        }}
                        width='full'
                    >
                        {text && <Text>{text}</Text>}
                        <Text>
                            This page was made with:{' '}
                            <Link
                                href='https://docs.github.com/en/graphql'
                                isExternal
                            >
                                Github GraphQL API
                            </Link>
                            ,{' '}
                            <Link href='https://nivo.rocks/' isExternal>
                                Nivo.Rocks
                            </Link>
                            ,{' '}
                            <Link
                                href='https://chakra-ui.com/docs/getting-started'
                                isExternal
                            >
                                Chakra UI
                            </Link>
                        </Text>
                    </Stack>
                </HStack>
            </Box>
        </Box>
    );
};

export default GradientBanner;
