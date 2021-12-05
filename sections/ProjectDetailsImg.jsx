import { Container, Stack, Box, Heading } from '@chakra-ui/react';
import { SimpleHeading } from '../components';
import Image from 'next/image';
const ProjectDetailsImg = ({ images }) => {
    return (
        <Container maxW='7xl' my={10} as='section'>
            <Stack spacing={10}>
                <SimpleHeading title='Project Looks' />
                <Stack spacing={10}>
                    {images.map(image => (
                        <Box key={image.id}>
                            <Heading
                                as='h3'
                                size='md'
                                fontWeight='light'
                                mb={2}
                            >
                                {/* Remove extension from the filename */}
                                {image.fileName.replace(/\.[^/.]+$/, '')}
                            </Heading>
                            <Image
                                loading='lazy'
                                src={image.url}
                                alt={image.fileName}
                                width={image.width}
                                height={image.height}
                                placeholder='blur'
                                blurDataURL={image.url}
                                layout='responsive'
                            />
                        </Box>
                    ))}
                </Stack>
            </Stack>
        </Container>
    );
};

export default ProjectDetailsImg;
