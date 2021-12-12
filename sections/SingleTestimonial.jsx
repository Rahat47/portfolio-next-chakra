import { Box, Grid, Text, Heading, Link } from '@chakra-ui/react';
import { Rating, Testimonial } from '../components';

const SingleTestimonial = () => {
    return (
        <Box as='section' bg='blue.900' color='white' py='6rem'>
            <Box
                maxW={{
                    base: 'xl',
                    md: '7xl',
                }}
                mx='auto'
                px={{
                    base: '6',
                    md: '8',
                }}
                py='10'
            >
                <Grid
                    templateColumns={{
                        base: '1fr',
                        lg: '460px 1fr',
                    }}
                    gap={{
                        base: '10',
                        lg: '8',
                    }}
                >
                    <Box>
                        <Text
                            textTransform='uppercase'
                            fontWeight='semibold'
                            color='yellow.400'
                            letterSpacing='wide'
                        >
                            Trusted by 30+ clients
                        </Text>
                        <Heading as='h3' size='3xl' mt='7' lineHeight='shorter'>
                            Hear from my clients
                        </Heading>
                        <Rating mt='10' value={5} />
                        <Text mt='4'>
                            <b>5/5</b> on{' '}
                            <Link
                                href='https://www.fiverr.com/rh_rahat_47?up_rollout=true'
                                isExternal
                                color='green.500'
                                fontWeight={500}
                            >
                                Fiverr
                            </Link>
                        </Text>
                    </Box>
                    <Box
                        maxW={{
                            base: 'unset',
                            lg: '37.5rem',
                        }}
                        mx='auto'
                    >
                        <Testimonial
                            name='Carlos Bedolla'
                            company='Entrepreneur, Founder of Cheer Music Maker'
                            // image='https://i.imgur.com/qXQZQZQ.jpg'
                        >
                            Rayhan is amazing! He took on my project and
                            implement ideas of his own and made my vision look
                            better than I imagined. Rayhan takes pride in his
                            work and I am very pleased to continue working with
                            him on all my future projects.
                        </Testimonial>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
};

export default SingleTestimonial;
