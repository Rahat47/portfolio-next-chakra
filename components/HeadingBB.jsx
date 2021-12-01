import { Text, useColorModeValue } from '@chakra-ui/react';
const HeadingBB = ({ text, coloredText }) => {
    return (
        <Text
            fontSize={{ base: '2xl', md: '5xl' }}
            color={useColorModeValue('black', 'white')}
            fontWeight='bold'
            fontFamily='Roboto'
            textAlign='center'
            mb={8}
            _after={{
                content: '""',
                display: 'block',
                width: '100%',
                height: '1px',
                background: useColorModeValue('gray.500', 'white'),
                margin: '0 auto',
                marginBottom: '1rem',
            }}
        >
            {text}
            <Text as='span' color={useColorModeValue('orange.400', 'blue.400')}>
                &nbsp;{coloredText}
            </Text>
        </Text>
    );
};

export default HeadingBB;
