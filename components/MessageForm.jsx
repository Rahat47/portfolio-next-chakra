import { useState } from 'react';

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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async e => {
        // Prevent the default form submission
        e.preventDefault();
        setIsSubmitting(true);

        // Check if the form is valid
        if (name && email && phone && message) {
            try {
                await fetch('/api/email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        message,
                    }),
                });

                toast({
                    title: 'Message sent',
                    description: 'Thanks for contacting us!',
                    status: 'success',
                });
                setIsSubmitting(false);
            } catch (error) {
                toast({
                    title: 'Error',
                    description: 'Something went wrong',
                    status: 'error',
                });
                setIsSubmitting(false);
            }

            // Reset the form
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setIsSubmitting(false);
        } else {
            // Show a toast
            toast({
                title: 'Error',
                description: 'Please fill out all fields',
                status: 'error',
            });
            setIsSubmitting(false);
        }
    };

    return (
        <Box onSubmit={handleSubmit} as='form' mt={10}>
            <Stack spacing={4}>
                <FormControl isRequired>
                    <FormLabel color='gray.900'>Your Name</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <AiOutlineUser color='black' size='20px' />
                        </InputLeftElement>
                        <Input
                            placeholder='Your Name'
                            bg={'gray.100'}
                            border={0}
                            color={'gray.500'}
                            _placeholder={{
                                color: 'gray.500',
                            }}
                            name='name'
                            value={name}
                            onChange={e => setName(e.target.value)}
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
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
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
                        value={message}
                        onChange={e => setMessage(e.target.value)}
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
                isLoading={isSubmitting}
            >
                Submit
            </Button>
        </Box>
    );
};

export default MessageForm;
