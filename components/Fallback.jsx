import { Skeleton, SkeletonText, Stack } from '@chakra-ui/react';

const Fallback = () => {
    return (
        <Stack>
            <Skeleton height='xl' />
            <Skeleton height='40px' />
            <SkeletonText />
            <SkeletonText />
            <SkeletonText />
            <SkeletonText />
        </Stack>
    );
};

export default Fallback;
