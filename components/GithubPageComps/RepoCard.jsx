import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    Link,
    Text,
    Stack,
    Tag,
    TagLeftIcon,
} from '@chakra-ui/react';

import { AiOutlineStar, AiOutlineFork, AiOutlineInbox } from 'react-icons/ai';
const RepoCard = ({ repo }) => {
    return (
        <Flex
            w='full'
            alignItems='stretch'
            justifyContent='center'
            as={Link}
            href={repo.url}
            isExternal
            transition='all 0.2s ease-in-out'
            _hover={{
                transform: 'scale(1.05)',
                textDecoration: 'none',
            }}
        >
            <Box
                w='full'
                maxW='sm'
                mx='auto'
                px={4}
                py={3}
                bg={useColorModeValue('white', 'gray.800')}
                shadow='md'
                rounded='md'
            >
                <Flex justifyContent='space-between' alignItems='center'>
                    <chakra.span
                        fontSize='xs'
                        color={useColorModeValue('gray.800', 'gray.400')}
                        isTruncated
                    >
                        {repo.nameWithOwner}
                    </chakra.span>
                    <chakra.span
                        bg={useColorModeValue('brand.200', 'brand.300')}
                        color={useColorModeValue('brand.800', 'brand.900')}
                        px={3}
                        py={1}
                        rounded='full'
                        textTransform='uppercase'
                        fontSize='xs'
                    >
                        {repo.visibility}
                    </chakra.span>
                </Flex>

                <Box>
                    <chakra.h1
                        fontSize='lg'
                        fontWeight='bold'
                        mt={2}
                        color={useColorModeValue('gray.800', 'white')}
                    >
                        {repo.name.length > 20
                            ? `${repo.name.substring(0, 20)}...`
                            : repo.name}
                    </chakra.h1>
                    <chakra.p
                        fontSize='sm'
                        mt={2}
                        color={useColorModeValue('gray.600', 'gray.300')}
                    >
                        {repo.description}
                    </chakra.p>
                </Box>
                <Box>
                    <Stack
                        spacing={3}
                        alignItems='center'
                        mt={6}
                        color={useColorModeValue('gray.700', 'gray.200')}
                        isInline
                        justify='center'
                    >
                        <Tag size='sm' colorScheme='yellow'>
                            <Box
                                w={4}
                                h={4}
                                borderRadius='full'
                                bg={repo?.primaryLanguage?.color || 'gray.200'}
                                mr={1}
                            />
                            <Text fontSize='md'>
                                {repo.primaryLanguage.name}
                            </Text>
                        </Tag>

                        <Tag size='sm' colorScheme='cyan'>
                            <TagLeftIcon as={AiOutlineStar} />
                            {repo.stargazerCount}
                        </Tag>

                        <Tag size='sm' colorScheme='black'>
                            <TagLeftIcon as={AiOutlineFork} />
                            {repo.forkCount}
                        </Tag>

                        <Tag size='sm' colorScheme='purple'>
                            <TagLeftIcon as={AiOutlineInbox} />
                            {repo.diskUsage} kb
                        </Tag>
                    </Stack>
                </Box>
            </Box>
        </Flex>
    );
};

export default RepoCard;
