import { Text, useColorModeValue } from '@chakra-ui/react';
const SectionHeading = ({ title }) => {
    return (
        <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
        >
            {title}
        </Text>
    );
};

export default SectionHeading;
