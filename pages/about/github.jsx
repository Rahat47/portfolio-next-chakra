import { useState } from 'react';
import { HeroComponent, Repos, Stats } from '../../components/GithubPageComps';
import {
    getLinesOfCode,
    getUser,
    getUserRepos,
} from '../../services/githubGQL';

const GithubPage = ({ user, totalLinesOfcode, repos }) => {
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
            <Repos repos={repos} />
        </>
    );
};

export default GithubPage;

export const getStaticProps = async () => {
    const user = await getUser('Rahat47');

    const { totalLinesOfcode } = await getLinesOfCode('Rahat47');

    const repos = await getUserRepos('Rahat47');

    return {
        props: {
            user,
            totalLinesOfcode,
            repos,
        },
    };
};
