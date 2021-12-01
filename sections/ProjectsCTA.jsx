import {
    Box,
    Button,
    Heading,
    Text,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';

const ProjectsCTA = () => {
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
                    Want to see more?
                </Heading>
                <Text mt='4' fontSize='lg'>
                    I have tons of projects on my GitHub. If you want to see
                    more of my work, my coding styles, or just want to say hi,
                    feel free to check out my GitHub or contact me. I am always
                    open to new projects and ideas.
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
                        rightIcon={<RiSendPlaneFill />}
                    >
                        Say Hello
                    </Button>
                    <Button
                        as='a'
                        href='https://github.com/Rahat47'
                        target='_blank'
                        rel='noopener noreferrer'
                        size='lg'
                        colorScheme='black'
                        variant='outline'
                        rightIcon={<FaGithub />}
                    >
                        Visit Github
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default ProjectsCTA;
