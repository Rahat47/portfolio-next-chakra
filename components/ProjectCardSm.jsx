import { useRouter } from 'next/router';
import {
    Box,
    Center,
    IconButton,
    Text,
    Image,
    Stack,
    useColorModeValue,
    Tag,
    Link as ChakraLink,
    Flex,
} from '@chakra-ui/react';
import Link from 'next/link';
import { AiOutlineRightSquare } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCardSm() {
    const router = useRouter();

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
                <Stack spacing='4'>
                    <Flex justify='space-between'>
                        <Text>
                            <Tag
                                textTransform={'uppercase'}
                                fontFamily='Roboto'
                                fontSize={'sm'}
                                colorScheme='green'
                            >
                                Frontend
                            </Tag>
                        </Text>

                        <Text>
                            <Tag
                                textTransform={'uppercase'}
                                fontFamily='Roboto'
                                fontSize={'sm'}
                                colorScheme='blue'
                            >
                                {new Date().toLocaleDateString()}
                            </Tag>
                        </Text>
                    </Flex>
                    <Link scroll={false} href='/projects/project-slug' passHref>
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

                    <Stack isInline justify='center'>
                        <IconButton
                            as='a'
                            href='https://github.com/Rahat47'
                            target='_blank'
                            rel='noopener noreferrer'
                            icon={<FaGithub />}
                        />
                        <IconButton
                            as='a'
                            href='https://github.com/Rahat47'
                            target='_blank'
                            rel='noopener noreferrer'
                            icon={<BiLinkExternal />}
                        />
                        <IconButton
                            onClick={() =>
                                router.push('/projects/project-slug')
                            }
                            icon={<AiOutlineRightSquare />}
                        />
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}
