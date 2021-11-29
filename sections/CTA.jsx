import {
    Box,
    Button,
    Heading,
    Text,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

const CTA = () => {
    const router = useRouter();

    return (
        <Box as='section'>
            <Box
                maxW='4xl'
                mx='auto'
                px={{ base: '6', lg: '8' }}
                py={{ base: '16', sm: '20' }}
                textAlign='center'
            >
                <Heading
                    size='3xl'
                    fontWeight='extrabold'
                    fontFamily='Poppins'
                    letterSpacing='tight'
                >
                    Ready to Grow?
                </Heading>
                <Text mt='4' fontSize='lg'>
                    A full-stack developer with a passion for building
                    beautiful, user-friendly web applications. I’m here to help
                    you get started and build your dream project.
                </Text>
                <Stack
                    direction={{
                        base: 'column',
                        sm: 'row',
                    }}
                    mt={8}
                    justify='center'
                >
                    <Button
                        onClick={() => router.push('/contact')}
                        size='lg'
                        colorScheme={useColorModeValue('green', 'teal')}
                        fontWeight='bold'
                    >
                        Contact Now
                    </Button>
                    <Button
                        onClick={() => router.push('/projects')}
                        size='lg'
                        colorScheme='black'
                        fontWeight='bold'
                        variant='outline'
                    >
                        View Projects
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default CTA;
