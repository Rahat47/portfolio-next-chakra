import { Container, Stack, Box, Heading } from '@chakra-ui/react';
import { SimpleHeading } from '../components';
import Image from 'next/image';
const ProjectDetailsImg = () => {
    return (
        <Container maxW='7xl' my={10} as='section'>
            <Stack spacing={10}>
                <SimpleHeading title='Project Looks' />
                <Stack spacing={10}>
                    <Box>
                        <Heading as='h3' size='md' fontWeight='light' mb={2}>
                            Full Page Look
                        </Heading>
                        <Image
                            loading='lazy'
                            src='/images/projects/travellers-full.png'
                            alt='Natours'
                            width={1360}
                            height={5870}
                            placeholder='blur'
                            blurDataURL='/images/projects/travellers-full.png'
                            layout='responsive'
                        />
                    </Box>
                    <Box>
                        <Heading as='h3' size='md' fontWeight='light' mb={2}>
                            Customized Look
                        </Heading>
                        <Image
                            loading='lazy'
                            src='/images/projects/memories-full.png'
                            alt='Natours'
                            width={1360}
                            height={2132}
                            placeholder='blur'
                            blurDataURL='/images/projects/memories-full.png'
                            layout='responsive'
                        />
                    </Box>
                </Stack>
            </Stack>
        </Container>
    );
};

export default ProjectDetailsImg;
