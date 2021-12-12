import {
    Avatar,
    Box,
    Flex,
    HStack,
    Img,
    Stack,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react';

export default function Testimonial(props) {
    const { image, company, name, children, ...rest } = props;
    return (
        <Stack
            spacing={6}
            h='100%'
            rounded='2xl'
            shadow='sm'
            py={{
                base: '6',
                md: '12',
            }}
            px={{
                base: '6',
                md: '14',
            }}
            bg={mode('white', 'gray.900')}
            color={mode('gray.800', 'gray.300')}
            {...rest}
        >
            <Box
                fontSize={{
                    base: 'md',
                    md: 'lg',
                }}
                flex='1'
            >
                {children}
            </Box>
            <HStack
                spacing={{
                    base: 3,
                    md: 5,
                }}
            >
                <Avatar
                    objectFit='cover'
                    rounded='full'
                    boxSize={14}
                    name={name}
                    src={image}
                />
                <Flex direction='column'>
                    <Text
                        as='a'
                        href='https://www.fiverr.com/rh_rahat_47/design-an-elegant-website-landing-page-react-portfolio'
                        target='_blank'
                        rel='noopener noreferrer'
                        fontWeight='bold'
                    >
                        {name}
                    </Text>
                    <Text fontSize='sm' fontWeight='medium' opacity={0.7}>
                        {company}
                    </Text>
                </Flex>
            </HStack>
        </Stack>
    );
}
