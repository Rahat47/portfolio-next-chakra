import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    Icon,
    VStack,
} from '@chakra-ui/react';

import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

import { MessageForm } from '../components';
import { avatars } from '../assets/data/avatars';

export default function ContactForm() {
    return (
        <Box position={'relative'} as='section'>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}
            >
                <Stack spacing={{ base: 10 }} justify='center' align='center'>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{
                            base: '3xl',
                            sm: '4xl',
                            md: '5xl',
                            lg: '6xl',
                        }}
                        zIndex={1}
                        textAlign='center'
                    >
                        Find me on the{' '}
                        <Text
                            as={'span'}
                            bgGradient='linear(to-r, red.400,pink.400)'
                            bgClip='text'
                        >
                            Web
                        </Text>
                    </Heading>
                    <AvatarGroup>
                        {avatars.map(avatar => (
                            <Avatar
                                key={avatar.name}
                                icon={avatar.icon}
                                position={'relative'}
                                color='white'
                                zIndex={2}
                                bg={avatar.color}
                                aria-label={avatar.name}
                                href={avatar.url}
                                as='a'
                                target='_blank'
                                rel='noopener noreferrer'
                                transition='all 0.5s ease'
                                _hover={{
                                    transform: 'translateY(-5px)',
                                }}
                            />
                        ))}
                    </AvatarGroup>

                    <VStack
                        zIndex={2}
                        pl={0}
                        spacing={3}
                        alignItems='flex-start'
                    >
                        <Button
                            size='md'
                            variant='ghost'
                            leftIcon={<MdPhone size='20px' />}
                            colorScheme='red'
                        >
                            +880-1626845767
                        </Button>
                        <Button
                            size='md'
                            variant='ghost'
                            leftIcon={<MdEmail size='20px' />}
                            colorScheme='yellow'
                        >
                            djrayhan8@gmail.com
                        </Button>
                        <Button
                            size='md'
                            colorScheme='green'
                            variant='ghost'
                            leftIcon={<MdLocationOn size='20px' />}
                        >
                            Dhaka, Bangladesh
                        </Button>
                    </VStack>
                </Stack>
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}
                    shadow='xl'
                >
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                        >
                            Want to get in touch?
                            <Text
                                as={'span'}
                                bgGradient='linear(to-r, red.400,pink.400)'
                                bgClip='text'
                            >
                                !
                            </Text>
                        </Heading>
                        <Text
                            color={'gray.500'}
                            fontSize={{ base: 'sm', sm: 'md' }}
                        >
                            Feel free to reach out to me by sending a message
                            below. I am always open to new ideas and
                            collaborations. I look forward to hearing from you.
                        </Text>
                    </Stack>
                    <MessageForm />
                </Stack>
            </Container>
            <Blur
                position={'absolute'}
                top={15}
                left={-10}
                style={{ filter: 'blur(70px)' }}
            />
        </Box>
    );
}

export const Blur = props => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height='560px'
            viewBox='0 0 528 560'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <circle cx='71' cy='61' r='111' fill='#F56565' />
            <circle cx='244' cy='106' r='139' fill='#ED64A6' />
            <circle cy='291' r='139' fill='#ED64A6' />
            <circle cx='80.5' cy='189.5' r='101.5' fill='#ED8936' />
            <circle cx='196.5' cy='317.5' r='101.5' fill='#ECC94B' />
            <circle cx='70.5' cy='458.5' r='101.5' fill='#48BB78' />
            <circle cx='426.5' cy='-0.5' r='101.5' fill='#4299E1' />
        </Icon>
    );
};
