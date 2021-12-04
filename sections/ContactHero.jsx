import {
    Box,
    useColorModeValue,
    Icon,
    Image,
    Container,
    Heading,
    Text,
} from '@chakra-ui/react';

import { ContactSocialHandle } from '../components';

const ContactHero = () => {
    const bg = useColorModeValue('white', 'gray.800');
    return (
        <Container
            as='section'
            pos='relative'
            overflow='hidden'
            bg={bg}
            mt={10}
            maxW='7xl'
        >
            <Box mx='auto'>
                <Box
                    pos='relative'
                    pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
                    maxW={{ lg: '2xl' }}
                    w={{ lg: 'full' }}
                    zIndex={1}
                    bg={bg}
                    border='solid 1px transparent'
                >
                    <Icon
                        display={{ base: 'none', lg: 'block' }}
                        position='absolute'
                        right={0}
                        top={0}
                        bottom={0}
                        h='full'
                        w={48}
                        color={bg}
                        transform='translateX(50%)'
                        fill='currentColor'
                        viewBox='0 0 100 100'
                        preserveAspectRatio='none'
                        aria-hidden='true'
                    >
                        <polygon points='50,0 100,0 50,100 0,100' />
                    </Icon>
                    <Box
                        mx='auto'
                        maxW={{ base: '7xl' }}
                        px={{ base: 4, sm: 6, lg: 8 }}
                        mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
                    >
                        <Box
                            w='full'
                            textAlign={{ sm: 'center', lg: 'left' }}
                            justifyContent='center'
                            alignItems='center'
                        >
                            <Heading
                                fontSize={{ base: '4xl', sm: '5xl', md: '5xl' }}
                                letterSpacing='tight'
                                lineHeight='short'
                                fontWeight='bold'
                                color={useColorModeValue('gray.900', 'white')}
                                fontFamily='Poppins'
                            >
                                <Text
                                    as='span'
                                    display={{ base: 'block', xl: 'inline' }}
                                >
                                    I’m always looking for{' '}
                                </Text>
                                <Text
                                    as='span'
                                    display={{ base: 'block', xl: 'inline' }}
                                    bgGradient='linear(to-r, red.400, blue.200)'
                                    bgClip='text'
                                >
                                    new opportunities
                                </Text>
                            </Heading>
                            <Text
                                mt={{ base: 3, sm: 5, md: 5 }}
                                fontSize={{ sm: 'lg', md: 'xl' }}
                                maxW={{ sm: 'xl' }}
                                mx={{ sm: 'auto', lg: 0 }}
                                color='gray.500'
                            >
                                I love taking new challanges, always looking for
                                new opportunities to grow and learn. Optimistic,
                                Ready to take on new challenges. I also love to
                                learn new things and share my knowledge with
                                others.
                            </Text>

                            <ContactSocialHandle />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                position={{ lg: 'absolute' }}
                top={{ lg: 0 }}
                bottom={{ lg: 0 }}
                right={{ lg: 0 }}
                w={{ lg: '50%' }}
                border='solid 1px transparent'
            >
                <Image
                    h={[56, 72, 96, 'full']}
                    w='full'
                    fit='cover'
                    src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
                    alt=''
                    loading='lazy'
                />
            </Box>
        </Container>
    );
};

export default ContactHero;
