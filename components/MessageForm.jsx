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
} from '@chakra-ui/react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';

const MessageForm = () => {
    return (
        <Box as='form' mt={10}>
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
                    />
                </FormControl>
            </Stack>
            <Button
                fontFamily={'Open Sans'}
                mt={8}
                w={'full'}
                bgGradient='linear(to-r, red.400,pink.400)'
                color={'white'}
                _hover={{
                    bgGradient: 'linear(to-r, red.400,pink.400)',
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
