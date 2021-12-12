import { useState } from 'react';
import { HeroComponent, Stats } from '../../components/GithubPageComps';
import { getLinesOfCode, getUser } from '../../services/githubGQL';

const GithubPage = ({ user, totalLinesOfcode }) => {
    const [username, setUsername] = useState('Rahat47');

    return (
        <>
            <HeroComponent
                username={username}
                user={user}
                linesOfCode={totalLinesOfcode}
                setUsername={setUsername}
            />
            <Stats username={username} name={user.name} />
        </>
    );
};

export default GithubPage;

export const getStaticProps = async () => {
    const user = await getUser('Rahat47');

    const { totalLinesOfcode } = await getLinesOfCode('Rahat47');

    return {
        props: {
            user,
            totalLinesOfcode,
        },
    };
};
