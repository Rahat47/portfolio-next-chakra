import { Icon, Text, Badge, Flex, useColorModeValue } from '@chakra-ui/react';
const SingleFact = ({ title, icon, content }) => {
    return (
        <Flex
            alignItems={'center'}
            transition='color 0.3s ease'
            _hover={{
                color: useColorModeValue('gray.600', 'gray.400'),
            }}
        >
            <Icon as={icon} />
            <Text fontWeight='bold' ml={6} mr='auto' fontFamily='Roboto'>
                {title}
            </Text>
            <Badge colorScheme='green'>{content}</Badge>
        </Flex>
    );
};

export default SingleFact;
