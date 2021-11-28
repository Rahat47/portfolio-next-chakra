import { IoLogoJavascript } from 'react-icons/io'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiMongodb } from 'react-icons/si'

export const skills = [
    {
        key: 'js',
        name: 'Javascript (ES7)',
        Icon: IoLogoJavascript,
        color: '#F7DF1E',
    },
    {
        key: 'react',
        name: 'React',
        Icon: FaReact,
        color: '#61DAFB',
    },
    {
        key: 'node',
        name: 'Node.js',
        Icon: FaNodeJs,
        color: '#339933',
    },
    {
        key: 'next',
        name: 'Next.js',
        Icon: SiNextdotjs,
        color: '#000000',
    },
    {
        key: 'ts',
        name: 'TypeScript',
        Icon: SiTypescript,
        color: '#3178C6',
    },
    {
        key: 'mongodb',
        name: 'Mongo DB',
        Icon: SiMongodb,
        color: '#47A248',
    }
]