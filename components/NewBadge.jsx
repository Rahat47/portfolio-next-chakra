import { HStack, Badge, Box, useColorModeValue } from '@chakra-ui/react';
import { HiArrowRight } from 'react-icons/hi';
import { useRouter } from 'next/router';

const NewBadge = ({ title }) => {
    const router = useRouter();

    return (
        <HStack
            className='group'
            px='2'
            py='1'
            bg={useColorModeValue('gray.200', 'gray.700')}
            rounded='full'
            fontSize='sm'
            mb='8'
            display='inline-flex'
            minW='18rem'
            cursor='pointer'
            onClick={() => router.push('/about/github')}
        >
            <Badge
                px='2'
                variant='solid'
                colorScheme='green'
                rounded='full'
                textTransform='capitalize'
            >
                New
            </Badge>
            <Box fontWeight='medium'>{title}</Box>
            <Box
                aria-hidden
                transition='0.2s all'
                _groupHover={{
                    transform: 'translateX(2px)',
                }}
                as={HiArrowRight}
                display='inline-block'
            />
        </HStack>
    );
};

export default NewBadge;
