import {
    Avatar,
    Box,
    Heading,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { backgrounds } from '../assets/data/backgroundsGradient';

const ClientReview = ({ review, client }) => {
    const randomNumber = () => {
        // return a random number from 1-4
        return Math.floor(Math.random() * 4);
    };

    return (
        <Stack
            bg={useColorModeValue('gray.50', 'gray.800')}
            py={12}
            px={8}
            spacing={{ base: 8, md: 10 }}
            align={'center'}
            direction={'column'}
            position='relative'
            rounded={'lg'}
            _after={{
                content: '""',
                position: 'absolute',
                zIndex: '-1',
                height: 'full',
                width: 'full',
                filter: 'blur(45px)',
                transform: 'scale(1.15)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: backgrounds[randomNumber()],
            }}
        >
            <Heading
                as='h2'
                size='2xl'
                lineHeight={1.5}
                mb={4}
                textAlign='center'
                fontFamily={'raleway'}
                bgGradient='linear(to-r, blue.400, teal.200)'
                bgClip='text'
            >
                What people are saying about the project...
            </Heading>
            <Stack spacing={{ base: 8, md: 10 }}>
                <Text
                    position='relative'
                    fontSize={{ base: 'xl' }}
                    textAlign={'center'}
                    maxW={'3xl'}
                    fontFamily='inter'
                >
                    {review.review}
                </Text>
                <Box textAlign={'center'}>
                    <Avatar
                        src={client.avatar.url}
                        alt={'client name'}
                        mb={2}
                        ring='3px'
                        ringColor={'teal.200'}
                        size={'lg'}
                    />

                    <Text fontWeight={600} fontFamily='raleway'>
                        {client.name}
                    </Text>
                    <Text
                        fontSize={'sm'}
                        color={useColorModeValue('gray.400', 'gray.400')}
                    >
                        {client.location}
                    </Text>
                </Box>
            </Stack>
        </Stack>
    );
};

export default ClientReview;
