import {
    Box,
    Center,
    Heading,
    Text,
    Image,
    Stack,
    Avatar,
    useColorModeValue,
    Tag,
    Link as ChakraLink,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function ProjectCardSm() {
    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
            >
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}
                    overflow='hidden'
                >
                    <Image
                        src={
                            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        layout={'fill'}
                        alt='some image'
                    />
                </Box>
                <Stack>
                    <Text>
                        <Tag
                            textTransform={'uppercase'}
                            fontFamily='Roboto'
                            fontSize={'sm'}
                            letterSpacing={1.1}
                            colorScheme='red'
                            variant='solid'
                        >
                            Frontend
                        </Tag>
                    </Text>
                    <Link href='/projects/project-slug' passHref>
                        <ChakraLink
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'Roboto'}
                        >
                            Boost your conversion rate
                        </ChakraLink>
                    </Link>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                    </Text>
                </Stack>
            </Box>
        </Center>
    );
}
