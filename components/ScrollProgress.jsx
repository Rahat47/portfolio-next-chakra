import { chakra } from '@chakra-ui/react';
import {
    motion,
    useSpring,
    useTransform,
    useViewportScroll,
} from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [isComplete, setIsComplete] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);

    const randomColor = () => {
        // return a random bright color
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    };

    return (
        <chakra.svg
            aria-label='scroll progress'
            position='fixed'
            top={{
                base: '10px',
                lg: '20px',
            }}
            bottom={{
                base: '10px',
                lg: '20px',
            }}
            width={{
                base: '70px',
                lg: '100px',
            }}
            height={{
                base: '70px',
                lg: '100px',
            }}
            className='progress-icon'
            viewBox='0 0 60 60'
        >
            <motion.path
                fill='none'
                strokeWidth='2'
                stroke={randomColor()}
                strokeDasharray='0 1'
                d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
                style={{
                    pathLength,
                    rotate: 90,
                    translateX: 5,
                    translateY: 5,
                    scaleX: -1, // Reverse direction of line animation
                }}
            />
            <motion.path
                fill='none'
                strokeWidth='3'
                stroke={'white'}
                d='M14,26 L 22,33 L 35,16'
                initial={false}
                strokeDasharray='0 1'
                animate={{ pathLength: isComplete ? 1 : 0 }}
            />
        </chakra.svg>
    );
};

export default ScrollProgress;
