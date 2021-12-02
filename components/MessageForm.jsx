import {
    Box,
    Stack,
    FormLabel,
    FormControl,
    InputGroup,
    InputLeftElement,
    Input,
    Button,
    Textarea,
    useToast,
} from '@chakra-ui/react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';

const MessageForm = () => {
    const toast = useToast({
        position: 'top',
        duration: 10000,
        isClosable: true,
        variant: 'solid',
    });

    const handleSubmit = e => {
        // Prevent the default form submission
        e.preventDefault();

        // show a toast message
        toast({
            title: 'Thank you!',
            description:
                'Thank you for taking your time to fill the form. Unfortunately, no message will be sent right now. I am still working on this project, so please check back soon.',
            status: 'info',
        });

        // clear the form
        e.target.reset();
    };

    return (
        <Box onSubmit={handleSubmit} as='form' mt={10}>
            <Stack spacing={4}>
                <FormControl isRequired>
                    <FormLabel color='gray.900'>First Name</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <AiOutlineUser color='black' size='20px' />
                        </InputLeftElement>
                        <Input
                            placeholder='first name'
                            bg={'gray.100'}
                            border={0}
                            color={'gray.500'}
                            _placeholder={{
                                color: 'gray.500',
                            }}
                            name='firstName'
                        />
                    </InputGroup>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel color='gray.900'>Email</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <MdEmail color='black' size='20px' />
                        </InputLeftElement>
                        <Input
                            placeholder='firstname@lastname.io'
                            bg={'gray.100'}
                            border={0}
                            color={'gray.500'}
                            _placeholder={{
                                color: 'gray.500',
                            }}
                            type='email'
                            name='email'
                        />
                    </InputGroup>
                </FormControl>
                <FormControl>
                    <FormLabel color='gray.900'>Phone</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <MdPhone color='black' size='20px' />
                        </InputLeftElement>
                        <Input
                            placeholder='phone number'
                            bg={'gray.100'}
                            border={0}
                            color={'gray.500'}
                            _placeholder={{
                                color: 'gray.500',
                            }}
                            name='phone'
                        />
                    </InputGroup>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel color='gray.900'>Message</FormLabel>
                    <Textarea
                        placeholder='Your Message...'
                        bg={'gray.100'}
                        border={0}
                        color={'gray.500'}
                        _placeholder={{
                            color: 'gray.500',
                        }}
                        name='message'
                    />
                </FormControl>
            </Stack>
            <Button
                fontFamily={'Open Sans'}
                mt={8}
                w={'full'}
                bgGradient='linear(to-r, red.400, pink.400)'
                color={'white'}
                _hover={{
                    bgGradient: 'linear(to-r, red.400, pink.400)',
                    boxShadow: 'xl',
                }}
                _active={{
                    bgGradient: 'linear(to-r, red.400, pink.400)',
                    boxShadow: 'xl',
                }}
                type='submit'
            >
                Submit
            </Button>
        </Box>
    );
};

export default MessageForm;
