import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Badge,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';

export default function ProfileCard({ client }) {
    return (
        <Center py={6}>
            <Box
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
            >
                <Avatar
                    size={'xl'}
                    src={client.avatar.url}
                    alt={client.name}
                    mb={4}
                    pos={'relative'}
                    title={client.name}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {client.name}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    <Link href={client.urlHandle} isExternal>
                        {client.urlHandle.length > 20
                            ? `${client.urlHandle.substring(0, 20)}...`
                            : client.urlHandle}
                    </Link>
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}
                >
                    {client.bio}
                </Text>

                <Stack
                    align={'center'}
                    justify={'center'}
                    direction={'row'}
                    mt={6}
                >
                    <Badge
                        px={2}
                        py={1}
                        colorScheme={useColorModeValue('green', 'gray')}
                        fontWeight={'400'}
                    >
                        {client.project.length}{' '}
                        {client.project.length > 1 ? 'Projects' : 'Project'}
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        colorScheme={useColorModeValue('green', 'gray')}
                        fontWeight={'400'}
                    >
                        {client.location}
                    </Badge>
                </Stack>
            </Box>
        </Center>
    );
}
