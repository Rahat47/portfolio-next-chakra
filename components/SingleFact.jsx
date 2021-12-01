import { HStack, Icon, Text, Badge } from '@chakra-ui/react';
import { FaCalendar } from 'react-icons/fa';
const SingleFact = ({ title, icon, content }) => {
    return (
        <HStack align='center' justify='space-between'>
            <Icon as={FaCalendar} />
            <Text fontWeight='bold' fontFamily='Roboto'>
                {title}
            </Text>
            <Badge colorScheme='green'>{content}</Badge>
        </HStack>
    );
};

export default SingleFact;
